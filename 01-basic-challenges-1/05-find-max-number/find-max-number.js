function findMaxNumber ( arr ) {
    let num;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( num === undefined || arr[i] > num ) {
            num = arr[i];
        }
        
    }
    return num;
}

module.exports = findMaxNumber;
