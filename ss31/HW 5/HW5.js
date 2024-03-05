function chunkArrayInGroups(arr, size) {
    let result = [];
    while (arr.length > 0) {
        result.push(arr.splice(0, size));
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 
