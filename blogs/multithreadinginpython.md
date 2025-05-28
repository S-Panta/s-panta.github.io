# MultiThreading in Python
For heavy I/O bound task, multithreading is quite good work-around. To understand this, two terms should be very familiar to the developer
- Process: A computer program is a static passive sets of instructions stored in disk and when this instruction is executed it's called process. 
- Thread is therefore a part of process which shares the resources that process have. A single process could have lot of threads.

To demonstrate how multithreading works in Python, see the code below:
```python
import threading
import time

def print_numbers():
    for i in range(5):
        print(f"the number is : {i}")
        time.sleep(1) 
thread = threading.Thread(target=print_numbers)
# Start the thread
thread.start()
# Wait until the thread completes
thread.join()
animals= ["dog","cat"]
for value in animals:
    # this runs in main thread
    print(value)
print("Main thread: Execution finished")
```
On calling `thread.start()`, the new thread is created that runs independently and concurrently with the main thread. They both exist simultaneously. To know how many threads are running in the current process, do `threading.active_count()`. In this example, the process count is two((main thread + your new thread)).NOte that the process is same. To ensure this, run `os.getpid()`, which returns the process ID as an integer and is same for both threads..
The call to `thread.join()` makes the main thread wait until the print_numbers thread completes. If you remove this line, the main thread will not wait for the print_numbers thread to finish, and the output will look like this:

```
the number is : 0
dog
cat
Main thread: Execution finished
the number is : 1
the number is : 2
the number is : 3
the number is : 4
```

Now, let's create two different threads to mimic two i/o task. This is simulated by varying the sleep time of code.

```python
import threading
import time

def simulate_work(name,sleep_time):
    for i in range(3):
        print(f"{name} is working on task {i}")
        time.sleep(sleep_time) 
    print(f"{name} has finished working")

thread1 = threading.Thread(target=simulate_work, args=("Thread-1",),kwargs={'sleep_time': 5})
thread2 = threading.Thread(target=simulate_work, args=("Thread-2",),kwargs={'sleep_time': 3})
thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Main thread: All threads are complete.")
```
Two threads, besides the main execution thread, are started concurrently. Each thread is passed a different waiting time via keyword arguments (**kwargs). Although Python (up to version 3.12) uses the Global Interpreter Lock (GIL), which allows only one thread to execute Python bytecode at a time, the output of this code appears as if both threads are running in parallel. Starting Python 3.13, this could be disabled.  See this [guide](https://docs.python.org/3/howto/free-threading-extensions.html) and [PEP 703](https://peps.python.org/pep-0703/) for details.

The output might look like this. The order might differ based on processing power of processor
```
Thread-1 is working on task 0
Thread-2 is working on task 0
Thread-2 is working on task 1
Thread-1 is working on task 1
Thread-2 is working on task 2
Thread-2 has finished working
Thread-1 is working on task 2
Thread-1 has finished working
Main thread: All threads are complete.
```
Why does this happen, given the GIL? The key point is that time.sleep() releases the GIL while the thread is sleeping. This allows other threads to acquire the GIL and run their bytecode. Therefore, even though only one thread executes Python code at any given moment, the threads effectively take turns running, giving the appearance of parallel execution.

Also, notice the role of .join(): if you remove .join() from any thread, the main thread may execute earlier, before that thread finishes.


To truly understand Python’s "single-threadedness" due to the Global Interpreter Lock (GIL) and its impact on concurrency, it helps to simulate threads performing CPU-bound work—i.e., tasks that do not release the GIL.

The following example demonstrates this by running two threads that perform heavy computations :

```python
import threading
import time

def simulate_work(name, loop_time):
    print(f"{name} starting CPU-bound work")
    start = time.time()
    count = 0
    for i in range(loop_time):
        count += i
    end = time.time()
    print(f"{name} finished in {end - start:.4f} seconds")

thread1 = threading.Thread(target=simulate_work, args=("Thread-1",), kwargs={'loop_time': 10**8})
thread2 = threading.Thread(target=simulate_work, args=("Thread-2",), kwargs={'loop_time': 10**7})

thread1.start()
thread2.start()

thread1.join()
thread2.join()

print("Main thread: All threads are complete.")

```
Both threads will be run by OS concurrently, therefore their starting seems at the same time. However their computation time is different. Python switches between threads approximately every 0.005 seconds (the thread switching interval), but the GIL ensures that only one thread runs at any instant.The output of this code will go something like this 
```
Thread-1 starting CPU-bound work
Thread-2 starting CPU-bound work
Thread-2 finished in 0.4743 seconds
Thread-1 finished in 2.5848 seconds
Main thread: All threads are complete.
```
Here, Thread-2 finishes much faster because it has a smaller workload . The threads do not truly run in parallel but rather take turns executing on the same CPU core, governed by the GIL.

Thus for more CPU bound task, multiprocessing is recommended rather than multithreading. This can only work in certain case where some I/O takes longer time. For example, if you are developing a scraper that fetches and downloads images from multiple websites, the download times may vary. Using multithreading here allows your program to handle multiple downloads concurrently, preventing the program from being blocked while waiting for one download to finish.