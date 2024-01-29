function reverseString(word) {
    let reverse=[];
    for(i=word.length;i--;){
        // console.log(word[i]);
        reverse.push(word[i])
        
    }
    // reverse=reverse.toString();
    return reverse.join('');
}
// console.log(reverseString('Hello'));
module.exports = reverseString;
