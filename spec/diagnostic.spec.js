'use strict';

const diagnostic = require('../lib/diagnostic.js');

describe('zero or more arguments', () => {

  describe('sum', () => {

    it('returns undefined when called without arguments', () => {
      expect(diagnostic.sum()).toBeUndefined();
    });

    it('returns the argument when called with just one', () => {
      expect(diagnostic.sum(42)).toBe(42);
    });

    it('returns the sum of all the arguments', () => {
      expect(diagnostic.sum(-1, -2, -3, -4, -5)).toBe(-15);
    });

  });

  describe('min', () => {

    it('returns undefined when called without arguments', () => {
      expect(diagnostic.min()).toBeUndefined();
    });

    it('returns the argument when called with just one', () => {
      expect(diagnostic.min(42)).toBe(42);
    });

    it('returns the minimum of all the arguments', () => {
      expect(diagnostic.min(-1, -2, -3, -4, -5)).toBe(-5);
    });

  });

});

describe('array creation', () => {

  describe('with default value', () => {

    it('returns the correct array', () => {
      expect(diagnostic.newArray(3, 0)).toEqual([0, 0, 0]);
    });

  });

  describe('with default values function', () => {

    it('returns the correct array', () => {
      var length = 3;
      var defaultsFunction = function defaultsFunction(index) {
        return length - index;
      };

      expect(diagnostic.newArray(length, defaultsFunction)).toEqual([3, 2, 1]);
    });

  });

});

describe('method addition', () => {

  describe('with existing object', () => {

    let obj = {};
    let propertyName = 'method';
    let method = function () {};

    let returnedObj = diagnostic.addMethod(propertyName, method, obj);

    it('returns that object', () => {
      expect(returnedObj).toBe(obj);
    });

    it('sets the property', () => {
      expect(returnedObj[propertyName]).toBeDefined();
    });

    it('sets the method', () => {
      expect(returnedObj[propertyName]).toBe(method);
    });

  });

  describe('without existing object', () => {

    let propertyName = 'method';
    let method = function () {};

    let returnedObj = diagnostic.addMethod(propertyName, method);

    it('returns a new object', () => {
      expect(typeof returnedObj).toBe('object');
    });

    it('sets the property', () => {
      expect(returnedObj[propertyName]).toBeDefined();
    });

    it('sets the method', () => {
      expect(returnedObj[propertyName]).toBe(method);
    });

  });

});
