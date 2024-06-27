function filterArray(numbers, value) {
    let resultNumbers = [];
    for (const sortNumber of numbers) {
        if (sortNumber > value) {
                resultNumbers.push(`${sortNumber}`);
        } else {};
     }
    
    return resultNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76].