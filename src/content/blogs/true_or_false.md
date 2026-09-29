---
title: 'True or False'
pubDate: 2026-09-29
description: "When coding feels right but isn't"
author: 'Sabin Panta'
---

# True or False
Sometime or A lot of time, you think your code works until it didn't work. Look at the following code snippet :

```python
  try:
            datastream = self.__get_datastream(datastream_uuid)
            datastream.load_observations(observations)
        except requests.exceptions.HTTPError as http_error:
            status_code = (
                http_error.response.status_code if http_error.response else None
            )
            # not all HTTPError response should be retried
            cache_data = status_code == 429
```

The motive was to check if status code was in the range of 429 and cache those data in the database. A code 429 means server is being hit by lot of response at once and we want to slow it down. This also means that there is nothing wrong with the credentials or the payload so this could be temporarily buffered and stored in a database and a retry worker after some time can push this on it's own schedule. I was thinking of excluding 401, 404 and 409 response as they means that the Hydroserver instances had incorrect credentials or incoming payload has incorrect datastream which didn't need caching.

Because the work I was doing with was the real instance of hydroserver, for designing this code, I did run it's local instance. For testing, i entered wrong credential which ran this code and well as expected nothing is stored in the cache database because this system was designed to not update it's local buffer if it carries wrong credentials. It worked. That's great. 

A status code of 409 means that there is duplication of payload and therefore server rejected the request. I don't want those to be stored in cache because it already exists in the database.

But, I was thinking specially of status code 429 while designing this. Trying to mimic 429 response normally is kind of a drag ( you need to send the server with request that exceeds it's rate limit).
So, I used incorrect credential but correct payload and run the program with 10000 mqtt publisher data at same time. The server responded lot with 404 and many with 429 requests. As per the code design, any response that has 429 should be saved to database. I checked the database and it was completely empty. My code was "false positive".

So, what was the error? On plain reading, the first part if conditional looks very good. If we have http_error.response then bring the status_code from them. Try printing `http_error.response.status_code` and you get status_code value for the request your code sends. This looks so innocuous until it's not. If I am trying to get a element called "status_code", it's always good to check whether it's parent function `http_error.response` exists or not.
See, this example:
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
However, the boolean of `http_error.response` returns false and therefore the variable `status_code` would always be None. Because for this python library, Response.__bool__() evaluates to True for status codes less than 400 (2xx and 3xx ranges) and False for 4xx and 5xx error codes, making it equivalent to checking response.ok.  __bool__ are the Python dunder method which as name suggest is used to find truthy or falsy of an object. Thus, my design was flawed here. The solution was simple. It just had to be 

```python
  status_code = http_error.response.status_code
  cache_data = status_code == 429
```

