const mongoose = require('mongoose')

//ES6 Promises
mongoose.Promise = global.Promise

//connect to the db before tests run
before(function(done){
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function(){
    console.log('Connections has been made, now make fireworks..');
    done();
  }).on('error', function(error){
      console.log('Connection error:',error);
  });
});

//Drop the characters collection before each test
beforeEach(function(done){
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
   done();
  });
});