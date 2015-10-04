# unittests
A collection of various methods for unit testing Node.js code.

This repo consists of a single, very simple http server application and various
methods of testing that application.

## Running the Application
In the root directoy of the project, run the following:
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
code represents passing tests.  Change one of the values of an assert to see
the output of a non-passing test.

## Running the Tests
```
cd node-tests
node tests.js
```

# mocha-tests
The tests in the mocha-tests directory are equivalent to the node-tests except
they are run with Mocha.  The un-altered code represents passing tests.  Change
either the tests or the underlying code to see the output of a failed test.

## Running the Tests
You need to install mocha on your system before you can run these tests (you
may have to install as admin):
```
npm install -g mocha
cd mocha-tests
mocha .
```
