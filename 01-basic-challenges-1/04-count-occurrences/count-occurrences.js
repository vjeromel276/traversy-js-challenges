function countOccurrences(word, letter) {
    let occ = 0;
    for (const i of word) {
        if(i===letter){
            occ++
        }
    }
    return occ;
}

module.exports = countOccurrences;
