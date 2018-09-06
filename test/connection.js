const mongoose = require('mongoose')

//connect to mongoose
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function(){
  console.log('Connections has been made, now make fireworks..');
}).on('error', function(error){
    console.log('Connection error:',error);
});