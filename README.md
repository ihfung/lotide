# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ihfung/lotide`

**Require it:**

`const _ = require('@ihfung/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual `: Accepts two arrays and checks if two arrays are equal 
- `assertEqual`: check if the actual value is equal to the expected value
- `assertObjectsEqual`: Accepts two objects and checks if two objects are equal and have same keys and values
- `countLetters`: Accepts a string and returns the count of each letter and compares it to the expected value
- `countOnly`: Accepts an array and an object returns the count of each item in the array and compares it to the expected value
- `eqArrays`: Accepts two arrays and checks if two arrays are equal
- `eqObjects`: Accepts two objects and checks if both objects have identical keys with equal values
- `findKey`: Accepts an object and a callback function and returns key to evaluate to be true by the callback function
- `findKeyByValue`: Accepts an object and a value and returns the key that matches the value
- `head` : Accepts an array and returns the first element of the array
- `letterPositions`: Accepts a string and returns the indexs of the specific letter in the string and compares it to the expected value
- `map`: Accepts an array and a callback function and returns a new array with callback function applied to each element
- `middle`: Accepts an array and returns the middle element of the array
- `tail`: Accepts an array and removes the first element of the array then returns the rest of the array
- `takeUntil`: Accepts an array and a callback function and removes elements from the array base on the callback function
- `without`: Accepts an array and a value and removes the value from the array then returns the rest of the array