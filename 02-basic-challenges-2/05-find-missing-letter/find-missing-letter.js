function findMissingLetter ( arr ) {
    if ( arr.length === 0 ) {
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
    console.log( 'proper', proper );
    console.log( 'arr', arr );
    for ( let index = 0; index < arr.length; index++ ) {
        if ( arr[ index ] !== proper[ index ] ) {
            if( proper[ index ] === undefined ) {
                return '';
            }
            result = proper[ index ];
            return result;
        }
    }

    // return result;
}
// arr1 = [ 'a', 'b', 'c', 'd', 'f', 'g' ];
// let aresult = findMissingLetter( arr1 );
// console.log( aresult );
module.exports = findMissingLetter;
