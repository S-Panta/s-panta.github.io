---
title: 'True or False'
pubDate: 2026-09-29
description: "When coding feels right but isn't"
author: 'Sabin Panta'
---

# True or False

Sometimes, or a lot of the time, you think your code works until it doesn't. Look at the following code snippet:

```python
try:
    datastream = self._get_datastream(datastream_uuid)
    datastream.load_observations(observations)
except requests.exceptions.HTTPError as http_error:
    status_code = (
        http_error.response.status_code if http_error.response else None
    )
    # not all HTTPError responses should be retried
    should_buffer = status_code == 429
```

The motive was to check if the status code was 429 and buffer those observations in the database. A 429 status code means the server is being hit with too many requests at once, and we want to slow things down. This also means that there is nothing wrong with the credentials or the payload, so these observations can be temporarily stored in a database table called `buffered_observations`. A retry worker can then pick them up and push them to HydroServer on its own schedule.

I was thinking of excluding 401, 404, and 409 responses because they mean that the HydroServer instance has incorrect credentials, the requested resource does not exist, or the incoming payload is a duplicate, respectively. These observations don't need to be stored for a later retry.

Although I was working with a real HydroServer instance, I also ran a local HydroServer instance while designing and testing this code. One of my first tests was to use incorrect credentials with an otherwise valid request. Since an authentication error  was not supposed to be buffered for later retry, I expected the buffered_observations table to remain empty. It did. This gave me confidence that the buffering logic was working as intended.

It worked. That's great.

But I was thinking specifically about status code 429 while designing this. Trying to mimic a 429 response normally is kind of a drag. You need to send enough requests to the server to exceed its rate limit.

So, I used incorrect credentials with a correct payload and ran the program with 10,000 MQTT publisher messages at the same time. The server responded with lots of 404s and many 429 responses because rate limit for Hydroserver authenticated and unauthenticated user are different. Any unauthenticated user have lower rate limit. As per the code design, any response that had a 429 status code should have been inserted into the `buffered_observations` table.

I checked the database, and it was completely empty.

My code was a "false positive."

So, what was the error?

On plain reading, the first part of the conditional looks very good. If we have `http_error.response`, then bring the `status_code` from it. Try printing `http_error.response.status_code`, and you get the status code for the request your code sends. This looks so innocuous until it's not.

If I am trying to get an element called `status_code`, it's always good to check whether its parent object, `http_error.response`, exists or not.

See this example:

```python
class Person:
    def __init__(self):
        self.address = "new york"

person = Person()

if person.address:
    print("this person lives in new york")
else:
    print("No address found")
```

However, the boolean value of `http_error.response` returns `False` for HTTP error responses, and therefore the variable `status_code` would always be `None`.

This happens because, for the `requests` Python library, `Response.__bool__()` evaluates to `True` for status codes less than 400 and `False` for 4xx and 5xx error codes. In other words, it behaves similarly to checking `response.ok`.

`__bool__` is a Python dunder method which, as the name suggests, is used to determine whether an object is truthy or falsy.

Thus, my design was flawed.

The solution was simple. I just had to access the response directly:

```python
status_code = http_error.response.status_code
should_buffer = status_code == 429
```

And there it was. The code looked perfectly reasonable when I first read it. The problem wasn't the `status_code` itself. The problem was the assumption I made about how Python would evaluate `http_error.response` in a boolean context.

A tiny `if` condition was enough to make perfectly valid 429 responses disappear.
