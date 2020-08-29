const answer = (ArrayFromAbove) => {
    let sortArr = ArrayFromAbove.sort((a,b) => (a-b));
    let tempArr = [];
    let resultArr = [];
    for (let i = 0 ; i < sortArr.length ; i++ ){
        if ((i === 0) || (sortArr[i] === sortArr[i-1])){
            tempArr.push(sortArr[i]);        
        }
        else{
            resultArr.push(tempArr);
            tempArr = [];
            tempArr.push(sortArr[i]);
        }
    }
    return resultArr;
}

let arr = answer([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]);
console.log([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]);
console.log(arr);