function fizzBuzzArray ( num ) {
    const output = [];
    for ( let i = 1; i < num + 1; i++ ) {
        if ( i % 3 === 0 && i % 5 !== 0 ) {
            // console.log( 'Fizz' );
            output.push( 'Fizz' );
            // return 'Fizz';
        }

        else if ( i % 3 !== 0 && i % 5 === 0 ) {
            // console.log( 'Buzz' );
            output.push( 'Buzz' );
            // return 'Fizz';
        }

        else if ( i % 5 === 0 && i % 3 === 0 ) {
            // console.log( 'FizzBuzz' );
            output.push( 'FizzBuzz' );
            // return 'FizzBuzz';
        }
        else {
            // console.log( i );
            output.push( i );
            // return i;
        }

    }
    return output;
}


module.exports = fizzBuzzArray;
