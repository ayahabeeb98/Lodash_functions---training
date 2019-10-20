//Drop function to remove all the falsey values from given array
// e == 0 -> when e is '' of false or 0 (implicit coercion), we don't need them so I check if e doesn't equal 0
// isNaN == true when e is NaN or undefined

function compact(array) {
    return array.filter(e => e != 0 && !isNaN(e) && e != null)
}

// ---------------------- *****2***** ----------------------
//Difference function creates an array of array values not included in the other given arrays
// we need to compare the values in the second array with the values in the first array
// to get the values that does'nt included in the second one
// Check that by using includes method

function difference(array, array2) {
    let differenceArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!array2.includes(array[i]) && !differenceArray.includes(array[i])) {
            differenceArray.push(array[i])
        }
    }

    return differenceArray
}


// ---------------------- ****3****** ----------------------
// Drop function to creates a slice of array with n elements dropped from the beginning
// if the length of the given array equal 1 so we need to remove it, we can't do that with shift method
// so we make the length of it = 0 to remove the element.
// otherwise we can use shift method

function drop(array, n = 1) {
    let indx = 0;
    while (indx < n) {
        if (array.length === 1) {
            array.length = 0;
            break
        }
        array.shift();
        indx++;
    }

    return array;
}

/* *********
or simply by using slice method

function  drop(array, n = 1) {
    if (array.length === 1) {
        array.length = 0;
        return array
    }
    return array.slice(n);
}
 */

// ---------------------- *****4***** ----------------------
// Creates a slice of array with n elements dropped from the end
// using slice method

function dropRight(array, n = 1) {
    if (n === 0) return array;
    return array.slice(0, -n);
}

// ---------------------- *****5***** ----------------------
// Fills elements of array with value from start up to end.
// looping on the array and change the element with the given value

function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
        array[i] = value;
    }
    return array
}

// ---------------------- *****6***** ----------------------
// FlattenDeep function to convert a given array ( contains arrays ) to regular array without arrays inside it.
// I was trying to solve it with loop but it does't work
// so instead of using loop I tend to use regex to do that
//  I have two choices, by using array.toString() -> to convert it to string without any [ ],
//  then convert it again to array and convert the element inside to Number
// the second choice by using regex as I mentioned so I use JSON.stringify method to convert the array to string and keep the [ ]
// then using replace to remove all the [ ] (/g)
// this solution Without mutates the original array

function flattenDeep(array) {
    return JSON.stringify(array).replace(/[\[\]]/g, '').split(',').map(Number);
}


// ---------------------- *****7***** ----------------------
// indexOf function to return the index of given value dependent on index to search from
// the default index to start the search is 0

function indexOf(array, value, indx = 0) {
    for (let i = indx; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
}


// ---------------------- ******8**** ----------------------
// intersection to creates an array of unique values that are included in all given arrays
// return the shared items between two arrays

function intersection(array, array2) {
    let intersectionArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array2.includes(array[i]) && !intersectionArray.includes(array[i])) {
            intersectionArray.push(array[i])
        }
    }
    return intersectionArray
}

// ---------------------- ******9**** ----------------------
// Casts value as an array if it's not one
// It's take a given value and convert it to an array, but if the given value is
// already array it return it the same
// in the case when there are no args given to the function JS consider that value as undefined
// at first I tried to give the args default value = [], but if someone pass null or undefined to the function
// and because of the default value implicit coercion apply to them so it will return the default value, and we don't
// want that so I check if the length of the args === 0 return empty array otherwise push the value to the new array.

function castArray(value) {
    let cast = [];
    if (value instanceof Array) {
        return value;
    } else if (arguments.length === 0) {
        return cast;
    } else {
        cast.push(value);
    }
    return cast
}


// ---------------------- ******10**** ----------------------
// Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept.
// filter a given array from duplicates values

function uniq(array) {
    let uni = [];
    for (let i of array) {
        if (!uni.includes(i)) {
            uni.push(i)
        }
    }
    return uni
}

/*
or
array.filter((v,i) => array.indexOf(v) === i)
 */


module.exports = {compact, difference, drop, dropRight, fill, flattenDeep, indexOf, intersection, castArray, uniq};