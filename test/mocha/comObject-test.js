'use strict';

var expect = require('chai').expect;
var comObject = require('../../comObject');

describe('unit test counter object', function(){

	it('with no function passed, should return 0', function(){
		expect(comObject(function(){}).getValue()).equal(0);
	});

	it('after function passed, should return count of functions', function(){
		var defaultFunc = function(){};
		var runComObject = comObject(defaultFunc);
		runComObject();
		expect(runComObject.getValue()).equal(1);
	});
});