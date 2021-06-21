const rotateLeft = (n, d, arr) => {
    let rotateArray = [];
    let restArray = [];
    let resultArray= [];
    for(let i = 0; i<d; i++) {
        rotateArray[i] = arr[i];
    }
    for(let i=d; i<n; i++) {
        restArray[i-d] = arr[i]
    }

    resultArray = [...restArray,...rotateArray];

    return resultArray;
}

let arr = [1,2,3,4,5];
const n = arr.length;
const d = 4; //number of array position that you wants to rotate left
//function calling
const rotate = rotateLeft(n, d, arr);
console.log(rotate);