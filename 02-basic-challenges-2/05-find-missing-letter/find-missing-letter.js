function findMissingLetter ( arr ) {
    if(arr.length===0){
        return '';
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split( '' );
    // console.log( alphabet );
    let arrLength = arr.length;
    
    let proper;
    let result;
    let start;

    for ( const letter of alphabet ) {
        if ( arr[ 0 ] === letter ) {
            start = alphabet.indexOf( letter );
            proper = alphabet.slice( start, arrLength );

        }
    } 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        // console.log(proper[index]);
        // console.log(element);
        if (element!==proper[index]) {
            return proper[index]
        }
        
    }
    return result;

}
// let aresult = findMissingLetter( [ 'a', 'b', 'c', 'd', 'f', 'g' ] );
// console.log( aresult );
module.exports = findMissingLetter;
