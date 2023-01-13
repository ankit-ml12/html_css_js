// to delete perticular element and add element we can use spilce methode

splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1);
splice(start, deleteCount, item1, item2, itemN);

// start:-
//=> Zero-based index at which to start changing the array
//=> Negative index counts back from the end of the array — if start < 0, start + array.length is used.
//=> If start < -array.length or start is omitted, 0 is used.
//=> If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.

// deleteCount Optional
// An integer indicating the number of elements in the array to remove from start.

// If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

// If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

// ====================
// item1, …, itemN Optional
// The elements to add to the array, beginning from start.

// If you do not specify any elements, splice() will only remove elements from the array.

// ============
// Return value
// An array containing the deleted elements.

// If only one element is removed, an array of one element is returned.

// If no elements are removed, an empty array is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
