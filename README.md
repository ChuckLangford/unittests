# unittests
A collection of various methods for unit testing Node.js code.

This repo consists of a single, very simple http server application and various
methods of testing that application.

## Running the Application
In the root directoy of the project, just run the following:
```
node app/app.js
```
The application will create an http server.  You can visit the following urls:
```
http://localhost:8080
http://localhost:8080/callback
```

# node-tests
A strictly "node only" way of running unit tests on code.  These tests use only
the Node API to test exposed module functions and color output.  The un-altered
code represents a passing test.  Change one of the values of the assert to see
the output of a non-passing test.

## Running the Test(s)
```
cd node-tests
node tests.js
```
