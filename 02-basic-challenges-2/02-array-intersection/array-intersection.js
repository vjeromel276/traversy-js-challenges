function arrayIntersection ( arr1, arr2 ) {
    let output = [];

    arr1.forEach( element1 => {
        arr2.forEach( element2 => {
            if ( element1 === element2 ) {
                output.push( element2 );
            }
        } );
    } );
    return output;

}

module.exports = arrayIntersection;
