function findMissingNumber ( arr ) {
    if ( arr === undefined )
        return undefined;
    if ( arr.length === 0 ) {
        return 1;
    }
    let expSum = ((arr.length+1) * ( arr.length + 2 ) / 2);
    // console.log( expSum );
    let actSum = 0;
    arr.forEach( element => {
        actSum += element;
        // console.log( `actSum: ${ actSum } ele: ${ element }` );
    } );
    return expSum - actSum;
}

module.exports = findMissingNumber;
