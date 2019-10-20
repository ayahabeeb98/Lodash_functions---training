function find(col,instruction,index=0){
    if (col instanceof Array && (typeof instruction !== "object")){

        let val = col.filter(e=> e === instruction)[0];
        for (let i = index ; i < col.length; i++){
            if (typeof instruction === "function" && instruction(col[i]))
                return col[i];
            else if (typeof instruction === "string") {
                if (instruction in col[i] && col[i][instruction] != false){
                    return col[i]
                }
            }
            else
                return val !== undefined ? val : 'Not Found' ;
        } // end for loop

    } else if (col,instruction instanceof Array){
        for (let object of col){
            if (instruction[0] in object && instruction[1] === object[instruction[0]] ) return object
        }
    } else if (col instanceof Array && typeof instruction === "object"){
        const keys = Object.keys(instruction), size = keys.length;
        let matches = 0;
        for (let i = 0; i < size; i++){
            for ( let obj of col){
                if (keys[i] in obj && instruction[keys[i]] === obj[keys[i]]){
                    if (matches === size) return obj;
                    matches++;
                }
            }
        }
        if( matches !== size ) return  'Not Found'
    }
}



function dropRightWhile(array,instruction){

    if (typeof instruction === "function"){
        for (let i = array.length - 1 ; i >= 0 ; i--){
            if (!instruction(array[i]))
                return array.slice(0, i+1);
        }

    }else  if (instruction instanceof Array){
        for (let i = array.length - 1 ; i >= 0 ; i--){
            if (instruction[0] in array[i] && !(instruction[1] === array[i][instruction[0]]) )
                return array.slice(0, i+1);
        }

    }else if(typeof instruction === "object"){
        let counter = 0;
        let keys = Object.keys(instruction), size = keys.length;
        for (let obj = array.length - 1 ; obj >= 0; obj-- ){
            for (let i = 0 ; i < size ; i ++ ) {
                if (keys[i] in array[obj] && instruction[keys[i]] === array[obj][keys[i]])
                    counter++;

            }
            if (counter !== size)
                return array.slice(0,obj+1)
        }

    }else if (typeof instruction === "string"){
        for (let obj = array.length - 1 ; obj >= 0; obj-- ){
            if ((instruction in array[obj] && array[obj][instruction] == 0) || !(instruction in array[obj]))
                return array.slice(0,obj+1);
        }

    }else {
        return 'Not found';
    }


}
