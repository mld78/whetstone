{
	name: `Array.from()`,
	language: `JavaScript`,
	description: `Array.from() has an optional parameter mapFn, which allows you to execute a map function on each element of the array (or subclass object) that is being created. More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array. This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from`
	slug: `Array/from`
},
{
	name: `Array.of()`,
	language: `JavaScript`,
	description: `The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of`
	slug: `Array/of`
},
{
	name: `Array.prototype.concat()`,
	language: `JavaScript`,
	description: `The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.`,
	version_added: `JavaScript 1.2`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat`
	slug: `Array/concat`
},
{
	name: `Array.prototype.copyWithin()`,
	language: `JavaScript`,
	description: `The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin`
	slug: `Array/copyWithin`
},
{
	name: `Array.prototype.entries()`,
	language: `JavaScript`,
	description: `The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries`
	slug: `Array/entries`
},
{
	name: `Array.prototype.every()`,
	language: `JavaScript`,
	description: `The every method executes the provided callback function once for each element present in the array until it finds one where callback returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callback returns a truthy value for all elements, every returns true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.`,
	version_added: `JavaScript 1.6`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every`
	slug: `Array/every`
},
{
	name: `Array.prototype.fill()`,
	language: `JavaScript`,
	description: `The fill() method fills all the elements of an array from a start index to an end index with a static value.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill`
	slug: `Array/fill`
},
{
	name: `Array.prototype.filter()`,
	language: `JavaScript`,
	description: `The filter() method creates a new array with all elements that pass the test implemented by the provided function.`,
	version_added: `JavaScript 1.6`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter`
	slug: `Array/filter`
},
{
	name: `Array.prototype.find()`,
	language: `JavaScript`,
	description: `The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find`
	slug: `Array/find`
},
{
	name: `Array.prototype.findIndex()`,
	language: `JavaScript`,
	description: `The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.\n\nThe findIndex method executes the callback function once for every array index 0..length-1 (inclusive) in the array until it finds one where callback returns a truthy value (a value that coerces to true). If such an element is found, findIndex immediately returns the index for that iteration. If the callback never returns a truthy value or the array's length is 0, findIndex returns -1. Unlike some other array methods such as Array#some, in sparse arrays the callback is called even for indexes of entries not present in the array.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex`
	slug: `Array/findIndex`
},
{
	name: `Array.prototype.forEach()`,
	language: `JavaScript`,
	description: `The forEach() method executes a provided function once for each array element.`,
	version_added: `JavaScript 1.6`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach`
	slug: `Array/forEach`
},
{
	name: `Array.prototype.includes()`,
	language: `JavaScript`,
	description: `The includes() method determines whether an array includes a certain element, returning true or false as appropriate.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes`
	slug: `Array/includes`
},
{
  name: `Array.prototype.indexOf()`,
  language: `JavaScript`,
  description: `The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.`,
  version_added: `JavaScript 1.6`,
  docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf`
	slug: `Array/indexOf`
},
{
  name: `Array.prototype.join()`,
  language: `JavaScript`,
  description: `The join() method joins all elements of an array (or an array-like object) into a string.`,
  version_added: `JavaScript 1.1`,
  docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join`
	slug: `Array/join`
},
{
  name: `Array.prototype.keys()`,
  language: `JavaScript`,
  description: `The keys() method returns a new Array Iterator that contains the keys for each index in the array.`,
  version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
  docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys`
	slug: `Array/keys`
},
{
	name: `Array.prototype.lastIndexOf()`,
	language: `JavaScript`,
	description: `The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.`,
	version_added: `JavaScript 1.6`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf`
	slug: `Array/lastIndexOf`
},
{
	name: `Array.prototype.map()`,
	language: `JavaScript`,
	description: `The map() method creates a new array with the results of calling a provided function on every element in this array.`,
	version_added: `JavaScript 1.6`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map`
	slug: `Array/map`
},
{
	name: `Array.prototype.pop()`,
	language: `JavaScript`,
	description: `The pop() method removes the last element from an array and returns that element. This method changes the length of the array.\n\nIf you call pop() on an empty array, it returns undefined.`,
	version_added: `JavaScript 1.2`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop`
	slug: `Array/pop`
},
{
	name: `Array.prototype.push()`,
	language: `JavaScript`,
	description: `The push() method adds one or more elements to the end of an array and returns the new length of the array.`,
	version_added: `JavaScript 1.2`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push`
	slug: `Array/push`
},
{
	name: `Array.prototype.reduce()`,
	language: `JavaScript`,
	description: `The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.`,
	version_added: `JavaScript 1.8`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce`
	slug: `Array/reduce`
},
{
	name: `Array.prototype.reduceRight()`,
	language: `JavaScript`,
	description: `The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.`,
	version_added: `JavaScript 1.8`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight`
	slug: `Array/reduceRight`
},
{
	name: `Array.prototype.reverse()`,
	language: `JavaScript`,
	description: `The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.`,
	version_added: `JavaScript 1.1`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse`
	slug: `Array/reverse`
},
{
	name: `Array.prototype.shift()`,
	language: `JavaScript`,
	description: `The shift() method removes the first element from an array and returns that element. This method changes the length of the array.`,
	version_added: `JavaScript 1.2`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift`
	slug: `Array/shift`
},
{
	name: `Array.prototype.slice()`,
	language: `JavaScript`,
	description: `The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.`,
	version_added: `JavaScript 1.2`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice`
	slug: `Array/slice`
},
{
	name: `Array.prototype.some()`,
	language: `JavaScript`,
	description: `The some() method tests whether some element in the array passes the test implemented by the provided function.`,
	version_added: `JavaScript 1.6`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some`
	slug: `Array/some`
},
{
	name: `Array.prototype.sort()`,
	language: `JavaScript`,
	description: `The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.`,
	version_added: `JavaScript 1.1`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort`
	slug: `Array/sort`
},
{
	name: `Array.prototype.splice()`,
	language: `JavaScript`,
	description: `The splice() method changes the contents of an array by removing existing elements and/or adding new elements.`,
	version_added: `JavaScript 1.2`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice`
	slug: `Array/splice`
},
{
	name: `Array.prototype.toLocaleString()`,
	language: `JavaScript`,
	description: `The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).`,
	version_added: `ECMAScript 2017`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString`
	slug: `Array/toLocaleString`
},
{
	name: `Array.prototype.toString()`,
	language: `JavaScript`,
	description: `The toString() method returns a string representing the specified array and its elements.`,
	version_added: `JavaScript 1.1`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString`
	slug: `Array/toString`
},
{
	name: `Array.prototype.unshift()`,
	language: `JavaScript`,
	description: `The unshift() method adds one or more elements to the beginning of an array and returns the new length of the new array.`,
	version_added: `JavaScript 1.2`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift`
	slug: `Array/unshift`
},
{
	name: `Array.prototype.values()`,
	language: `JavaScript`,
	description: `The values() method returns a new Array Iterator object that contains the values for each index in the array.`,
	version_added: `ECMAScript 2015 (6th Edition, ECMA-262)`,
	docs_url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values`
	slug: `Array/values`
}
