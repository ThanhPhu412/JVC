function confirmEnding(str, target) {
    let ending = str.slice(-target.length);
    return ending === target;
}

console.log(confirmEnding("Hello world", "world"));  
console.log(confirmEnding("Hello world", "orld"));  
console.log(confirmEnding("Hello world", "world2"));  
