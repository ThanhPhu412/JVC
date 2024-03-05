function truncate(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + "...";
}

console.log(truncate("Hello world, I'm Peter", 11)); 
