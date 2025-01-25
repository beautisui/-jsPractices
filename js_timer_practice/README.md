## Practice setInterval and setTimeout

## How those works:-

- Process:
  - javascript is **single-threaded** means it can handle one task at a time in the call stack.
  - when we run setInterval or setTimeout a **timer mechanism** created in the _web API_ .
  - then web api starts timer(delay).
  - when the timer expires it call back function sended to the timer queue.
  - and the function stores to the timer queue.
  - then **event loop** (type of bindwidth, between timer queue and the call stack) check if the stack is empty or not?
  - if the stack is empty it send the callback function to the calll stack from timer queue.
  - if the stack is not empty it will wait.
  - when the call back fn go to the stack it become execute.

## Diagram:

```

1. Code starts
   |
   v
   +------------+
   | setInterval|
   +------------+
   |
   v
   Timer starts ticking (interval defined)
   |
   v Every interval, callback moves to Timer Queue
   +------------------+
   | Timer Queue      |
   +------------------+
   |
   v
   If Call Stack is empty, move to it(moved by event loop)
   +-------------+
   | Call Stack  |
   +-------------+
   |
   v
   Execute callback
```
