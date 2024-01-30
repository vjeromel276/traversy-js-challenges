function titleCase ( str ) {
    str = str.toLowerCase();
    let sentence = [];
    let words = str.split( ' ' );
    let output = [];
    for ( const word of words ) {
        sentence = [ ...word ];
        sentence[ 0 ] = sentence[ 0 ].toUpperCase();
        output.push( sentence.join( '' ) );
    }
    // console.log(output.join(' ').toString());
    return ( output.join( ' ' ).toString() );
}

module.exports = titleCase;
