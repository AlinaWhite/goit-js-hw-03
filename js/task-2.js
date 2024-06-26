function makeArray (firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);
    return newArray.length <= maxLength ? newArray : newArray.slice(0, maxLength);    
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));