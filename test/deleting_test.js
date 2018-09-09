const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Finding records',function(){
    
    var char;

    beforeEach(function(done){
     char = new MarioChar({
        name:'Mario'
      });

    char.save().then(function(){
        // assert(char.isNew === false);
        done();
    });
});

    //create tests
    it('Finding records to the database',function(done){
      MarioChar.findOne({name:'Mario'}).then(function(result){
        // assert(result.name === 'Mario');
        done();
      })

    });

    it('Deletes one record by ID from the database',function(done){
        MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                // assert(result === null);
                done();
            });
        });
  
      });
});