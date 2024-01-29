function calculator ( n1, n2, sym ) {
    let result;
    if ( sym === '+' ) {
        return n1 + n2;
    } else if ( sym === '-' ) {
        return n1 - n2;
    } else if ( sym === '/' ) {
        return n1 / n2;
    } else if ( sym === '*' ) {
        return n1 * n2;
    } else {
        console.error( 'Symbol not allowed' );
    }

    switch ( sym ) {
        case '+':
            result;
            break;

        default:
            break;
    }

}

module.exports = calculator;
