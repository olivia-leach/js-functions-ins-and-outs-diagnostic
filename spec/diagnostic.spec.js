'use strict';

const assessment = require('../lib/diagnostic.js');

describe('zero or more arguments', function() {

  describe('sum', function() {

    it('returns undefined when called without arguments', function() {
      expect(assessment.sum()).toBeUndefined();
    });

    it('returns the argument when called with just one', function() {
      expect(assessment.sum(42)).toBe(42);
    });

    it('returns the sum of all the arguments', function() {
      expect(assessment.sum(-1, -2, -3, -4, -5)).toBe(-15);
    });

  });

  describe('min', function() {

    it('returns undefined when called without arguments', function() {
      expect(assessment.min()).toBeUndefined();
    });

    it('returns the argument when called with just one', function() {
      expect(assessment.min(42)).toBe(42);
    });

    it('returns the minimum of all the arguments', function() {
      expect(assessment.min(-1, -2, -3, -4, -5)).toBe(-5);
    });

  });

});

describe('array creation', function() {

  describe('with default value', function() {

    it('returns the correct array', function() {
      expect(assessment.newArray(3, 0)).toEqual([0, 0, 0]);
    });

  });

  describe('with default values function', function() {

    it('returns the correct array', function() {
      var length = 3;
      var defaultsFunction = function defaultsFunction(index) {
        return length - index;
      };

      expect(assessment.newArray(length, defaultsFunction)).toEqual([3, 2, 1]);
    });

  });

});

describe('method addition', function() {

  describe('with existing object', function() {

    var obj = {};
    var propertyName = 'method';
    var method = function() {};

    var returnedObj = assessment.addMethod(propertyName, method, obj);

    it('returns that object', function() {
      expect(returnedObj).toBe(obj);
    });

    it('sets the property', function() {
      expect(returnedObj[propertyName]).toBeDefined();
    });

    it('sets the method', function() {
      expect(returnedObj[propertyName]).toBe(method);
    });

  });

  describe('without existing object', function() {

    var obj = {};
    var propertyName = 'method';
    var method = function() {};

    var returnedObj = assessment.addMethod(propertyName, method);

    it('returns a new object', function() {
      expect(typeof returnedObj).toBe('object');
    });

    it('sets the property', function() {
      expect(returnedObj[propertyName]).toBeDefined();
    });

    it('sets the method', function() {
      expect(returnedObj[propertyName]).toBe(method);
    });

  });

});
