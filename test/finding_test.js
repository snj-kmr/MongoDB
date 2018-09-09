// const mocha = require('mocha');
// const assert = require('assert');
// const MarioChar = require('../models/mariochar');


// describe('Finding records',function(){
    
//     var char;

//     beforeEach(function(done){
//      char = new MarioChar({
//         name:'Mario'
//       });

//     char.save().then(function(){
//         assert(char.isNew === false);
//         done();
//     });
// });

//     //create tests
//     it('Finding records from the database',function(done){
//       MarioChar.findOne({name:'Mario'}).then(function(result){
//         assert(result.name === 'Mario');
//         done();
//       })

//     });

//     it('Finds one record by ID form the database',function(done){
//         MarioChar.findOne({_id:char._id}).then(function(result){
//           assert(result.id.toString() === char._id.toString());
//           done();
//         })
  
//       });
// });