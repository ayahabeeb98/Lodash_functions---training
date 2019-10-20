// ---------------------- ******20**** ----------------------
// Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
// because they are limited symbols so I store them in an object with their corresponding html entities
// then I make a pattern to use it with regex so, this pattern is the symbols we need to convert ( the keys in my obj)
// then replace any of matched symbols with it value in the object

function escape(str='') {
    let char = {"&":'&amp;' , "<" : '&lt;' ,
        ">" : '&gt;' , "'" : '&#39;' ,
        "\"" : '&quot;'
    };
    let k = Object.keys(char).join(',').replace(/,/g,'|');
    let pattern = RegExp(k,"g");
    return str.replace(pattern, str => char[str]);
}

// ---------------------- ******21**** ----------------------

function kebabCase(str){
    if (str.length === 0 ) return "";
    let strArray = str.split(/[\W_-]/g).filter(e=>e.length !==0);

    if (strArray.length !== 1) {
        let strLower = strArray.join(',').toLowerCase();
        return strLower.replace(/,\w/g, str => '-' + str[1]);
    }
    return strArray.toString().replace(/[A-Z]/g,str=> '-' + str).toLowerCase();
}


function snakeCase(str){
    if (str.length === 0 ) return "";
    let strArray = str.split(/[\W_-]/g).filter(e=>e.length !==0);

    if (strArray.length !== 1) {
        let strLower = strArray.join(',').toLowerCase();
        return strLower.replace(/,\w/g, str => '_' + str[1]);
    }
    return strArray.toString().replace(/[A-Z]/g,str=> '_' + str).toLowerCase();
}

function startCase(str){
    if (str.length === 0 ) return "";
    let strArray = str.split(/[\W_-]/g).filter(e=>e.length !==0);

    if (strArray.length !== 1) {
        let strLower = strArray.join(',').toLowerCase();
        return strLower.replace(/,\w/g, str => ' ' +  str[1].toUpperCase());
    }
    return strArray.toString().replace(/[A-Z]/g,str=>' ' + str.toUpperCase());
}

// ---------------------- ******22**** ----------------------
// repeat passed string n times,
//

function repeat(string, n){
    let str ='';
    let counter = 0;
    while (counter < n) {
        str+= string;
        counter++;
    }
    return str;
}

// ---------------------- ******23**** ----------------------
// Creates an array of unique values, in order, from all given arrays
// to do that I convert all the passed arrays to string so I can consider them one array
// map on the return array because may be it contain an Int values, It should stay Int not number
// finally filter the array to remove the duplicated values

function union(...args){
    let uni = args.toString().split(',').map(e=>{
        if (isNaN(Number(e))){
            return e
        }else {
            return  Number(e)
        }
    });

    return uni.filter((e,i) => uni.indexOf(e) === i);
}

// ---------------------- ******24**** ----------------------
// this function to return the difference value in two array based on method passed to this function
// this is type of high ordered function
// So we must apply the instruction to all the element in array
// then compare between them and return the origin element

function differenceBy(array, array2,instruction) {
    let differenceArray = [];
    let dif = array.map(e=>instruction(e));
    let dif2 = array2.map(e=>instruction(e));
    let count = 0;
    for (let i of dif){
        if (!dif2.includes(i) && !differenceArray.includes(array[i])){
            differenceArray.push(array[count])
        }
        count ++;
    }
    return differenceArray
}

// ---------------------- ******25**** ----------------------
// similar to what filter method do, but this method mutates array
// it will return array contains the item that achieve the condition in the passed method
// using splice to remove element from the array

function remove(array, instruction){
    let passed = [];
    let indx = 0;
    for (let e of array) {
        if (instruction(e)) {
            passed.push(e);
            array.splice(indx,1)
        }
        indx++;
    }

    return passed;
}

// ---------------------- ******26**** ----------------------
// Creates an object composed of the inverted keys and values of object.
// for in the object => access the keys of that object
// to access the value -> obj[i]
// using [] to add a property to the new object, we can't use dot notation in this case
// because the key need to evaluate

function invert(obj){
    let invertObj = {};
    let count = 0;
    for( let i in obj){
        invertObj[obj[i]] = i;
        count++;
    }
    return invertObj;
}


// ---------------------- ******27**** ----------------------
// Creates an object composed of the picked object properties.
// there is two cases, if the keys passed as single string or passed as an array
// if it passed as an array we need to loop to check if this keys existing in the given
// object if it we passed it with it's value to the new object
// the second case simply we check if this key exist in the object,

function pick(object, keys){
    let result = {};
    if (keys instanceof Array){
        for (let i of keys){
            if (i in object) {
                result[i] = object[i]
            }
        }
    }
    if (keys in object) {
        result[keys] = object[keys]
    }
    return result;
}

// ---------------------- ******28**** ----------------------
// similar to repeat function
// Invokes the iteratee n times, returning an array of the results of each invocation.

function times(n,instruction){
    let count = 0;
    let result = [];
    while (count < n){
        result.push(instruction(count));
        count ++
    }

    return result;
}

// To use it with times function
function constant(value){
    return (value)=>value;
}

// ---------------------- ******29**** ----------------------
// Clamps number within the inclusive lower and upper bounds.
// it takes 3 parameter, and return the number that is between the lower and upper


function clamp(...args){
    let maximum = args.reduce((max,nxt) => Math.max(max,nxt));
    let minimum = args.reduce((min,nxt) => Math.min(min,nxt));
    return args.filter((e)=> (e !== maximum) && (e !== minimum) )[0]
}

module.exports = {escape,kebabCase,repeat,union,differenceBy,remove,invert,pick,times,clamp};