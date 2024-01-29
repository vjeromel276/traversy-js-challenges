function reverseString(str) {
    let strArr=[...str];
    let revStrArr=[];
    for(letl letter of strArr){
        revStrArr.push(letter);
    }
    return revStrArr.toString();
}

module.exports = reverseString;
