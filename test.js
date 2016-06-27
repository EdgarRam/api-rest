var assert = require('chai').assert;
var  expect   = require('chai').expect;
var mongoose = require('mongoose');

describe('Array', function() {

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });

    describe('init mongoose' , function(){
        it('should return -1 when the value is not present', function () {
            mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
                if(err) throw err;
                console.log('Connected to Database');
            });
        });
    });

});
