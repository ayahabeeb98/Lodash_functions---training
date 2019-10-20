// ---------------------- ******11**** ----------------------
//there are 3 types of collections ( arrays, Objects and, String)
// I make a check for each one

function includes(collection, value, indx = 0) {
    let result;
    if (collection instanceof Array) {
        for (let i = indx; i < collection.length; i++) {
            result = collection[i] === value;
            if (result) break
        }
        return result;
    } else if (typeof collection === "object") {
        for (let j in collection) {
            result = collection[j] === value;
            if (result) break
        }
        return result;
    } else if (typeof collection === "string") {
        let pattern = RegExp(value);
        return pattern.test(collection)
    }
}

// ---------------------- ******12**** ----------------------
// Sample function to gets a random element from collection

function sample(collection) {
    if (collection instanceof Array) {
        let size = array.length;
        let indx = Math.floor(Math.random() * size);
        return collection[indx]
    }
    let k = Object.keys(collection);
    let randIndx = Math.floor(Math.random() * k.length);
    return collection[k[randIndx]]
}


// ---------------------- ******13**** ----------------------
//SampleSize function
//Gets n random elements at unique keys from collection up to the size of collection
// if the passing collection is object we need to determine the length of it, we can get the
// length via Object.keys().length

function sampleSize(collection, size = 1) {
    let indx;
    let randomArray = [];
    let counter = 0;
    if (collection instanceof Array) {
        while (counter !== size) {
            if (counter === collection.length) break;
            indx = Math.floor(Math.random() * collection.length);
            if (!randomArray.includes(collection[indx])) {
                randomArray.push(collection[indx]);
                counter++;
            }
        }
        return randomArray
    }

    let k = Object.keys(collection);
    while (counter !== size) {
        if (counter === k.length) break;
        indx = Math.floor(Math.random() * k.length);
        if (!randomArray.includes(collection[k[indx]])) {
            randomArray.push(collection[k[indx]]);
            counter++;
        }
    }

    return randomArray
}


// ---------------------- ******14**** ----------------------
// fromPairs function returns an object composed from key-value pairs
// Because we don't know the number of arrays that will be passing to the function
// I use ...args => it's return array of all the passing values
// so because of that it will return array of arrays, I convert it to String to omit all the []
// then convert it to one array by using split(',')

function fromPairs(...args) {
    let array = args.toString().split(',');
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            obj[array[i]] = Number(array[i + 1])
        }
    }
    return obj;
}




// ---------------------- ******15**** ----------------------
//toPairs function, the inverse of fromParis
// Creates an array of own enumerable string keyed-value pairs for object

function toPairs(obj) {
    let k = Object.keys(obj);
    let resultArray = [];
    for (let i = 0; i < k.length; i++) {
        resultArray.push([(k[i])]);
        resultArray[i].push( Number(obj[k[i]]) )
    }
    return resultArray;
}


// Object.entries() returns an array whose elements are arrays
// corresponding to the enumerable string-keyed property [key, value]
// pairs found directly upon object.

// function toPairs(obj) {
//     return Object.entries(obj);
// }

// ---------------------- ******16**** ----------------------
// pull function -> Removes all given values from array
// the first thing I thought of it to solve this method is regex
// because we don't know the number of values to be remove we need to pass ...args
// to be able to use regex we need to make a pattern, and that what i made
// by loop of args and separates between each element with ( | ) -> mean or in regex
// then using RegExp constructor to create the pattern

function pull(array, ...args) {
    let regexPattern = args.join(',').replace(/,/g,'|');
    let pattern = RegExp(regexPattern, 'g');
    let arr = array.toString().replace(pattern, '').split(',').filter(e => e != 0);

    array.length = arr.length; // because this method mutates array
    for (let j = 0; j < arr.length; j++) {
        array[j] = arr[j];
    }
    return array
}

// ---------------------- ******17**** ----------------------
// pullAll function it accepts an array of values to remove
// the same solution except args here become array of arrays

function pullAll(array, ...args) {
    let regexPattern = args.join(',').replace(/,/g,'|');
    let pattern = RegExp(regexPattern, 'g');
    let arr = array.toString().replace(pattern, '').split(',').filter(e => e != 0);

    array.length = arr.length;
    for (let j = 0; j < arr.length; j++) {
        array[j] = arr[j];
    }
    return array
}

// ---------------------- ******18**** ----------------------

/*
function pullAt(array, indx) {
    if (indx instanceof Array) {
        let result = [];
        let copyArray = [...array];
        let counter = 0;
        indx.sort();
        for (let i = 0; i < copyArray.length; i++) {
            for (let j of indx) {
                if (i === j) {
                    result.push(copyArray[i]);
                    if (counter !== 0) {
                        array.splice(i - 1, 1);
                    }
                    array.splice(i, 1);
                    counter += 1;
                }
            }
        }
        return result
    } else {
        let result = array[indx];
        array.splice(indx, 1);
        return result
    }
}
*/

// Removes elements from array corresponding to indexes and returns an array of removed elements.
// at first we need to sort the index that will be removed from the array, if we don't do that an error will be occurs
// and that because I used splice to remove and this method mutates the origin array
// with splice we need to need to specify the index for the element, the length of array change after each remove
//
function pullAt(array, indx) {
    if (indx instanceof Array) {
        indx.sort();
        let result = [];
        for (let i = 0; i < indx.length; i++) {
            result.push(array[indx[i] - i]);
            array.splice(indx[i] - i, 1)
        }
        return result
    } else {
        let result = array[indx];
        array.splice(indx, 1);
        return result
    }
}

// ---------------------- ******19**** ----------------------
// if I pass --foo-bar-- it will become fooBar,
// at first convert the string to lowercase
// then split the string based in the separator between them
// after that make the first letter of the second word capitalize

function camelCase(str){
    if (str.length === 0 ) return "";
    let strLower = str.toLowerCase();
    let strArray = strLower.split(/[\W_-]/g).filter(e=>e.length !==0);
    return strArray.join(',').replace(/,\w/g, str => str[1].toUpperCase());
}

// ---------------------- ******20**** ----------------------
// to make the first letter of the sentence capital letter
// simply by using regex

function capitalize(str) {
    if (str.length === 0 ) return "";
    let strLower = str.toLowerCase();
    return strLower.replace(/\w/,str=>str.toUpperCase());
}


// ---------------------- ******20**** ----------------------

function escapeRegExp(str=''){
    return str.replace(/[\^$".*+?()\[\]{}|]/g,"\\$&")
}

module.exports = {includes, sample, sampleSize, fromPairs,toPairs, pull, pullAll, pullAt,camelCase,capitalize,escapeRegExp};