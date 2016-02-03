//request handler export so basic servers
  //export.requestHandler
    //then in basic server we need to add a require feature
    //so it knows that it needs to request informatino
    //request-handler.js
//So make HTTP server function in requestHandler, export it and hand
  //it over to basic-server.js var server line 25

//basic server we need to add a require, so it knows to get
  //data from the paramters javascript files

//replace the actuall url address in chatterbox client file
  //instead of going to api url we will now go to
  //url provided in basic requirement

//in request handlers.js line 40 said we need to change the header
  //if we want to pass in anything other than text like html or json

//potential we have the change the client to hanlde the differences
  //between parse and API

// Failing Tests!
  // server
  //   1) should respond to GET requests for /log with a 200 status code
  //   2) should send back parsable stringified JSON
  //   3) should send back an object
  //   4) should send an object containing a `results` array
  //   5) should accept POST requests to /send
  //   6) should respond with messages that were previously posted
  //   7) Should 404 when asked for a nonexistent file

  // Node Server Request Listener Function
  //   8) Should answer GET requests for /classes/room with a 200 status code
  //   9) Should send back parsable stringified JSON
  //   10) Should send back an object
  //   11) Should send an object containing a `results` array
  //   12) Should accept posts to /classes/room
  //   13) Should respond with messages that were previously posted
  //   14) Should 404 when asked for a nonexistent file
