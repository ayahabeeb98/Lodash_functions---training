// ---------------------- ********** ----------------------
//  join
function join(array,separator=','){
    return array.join(separator)
}

// ---------------------- ********** ----------------------

// last
function last(array){
    return array[array.length-1]
    // return array.slice(-1)
}


// ---------------------- ********** ----------------------
// initial function
// Gets all but the last element of array
function initial (array) {
    return array.slice(0,-1);
}

// ---------------------- ********** ----------------------
// head function to return the first element of the array
// simply by using shift method

function head(array) {
    return array.shift();
}


module.exports = {join, last, initial, head};