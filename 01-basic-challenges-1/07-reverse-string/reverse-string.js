function reverseString ( str ) {
    // *my way of doing it
    // let strArr=[...str];
    // let revStrArr=[];
    // for(let letter of strArr){
    //     revStrArr.push(letter);
    // }
    // return revStrArr.toString();
    //* BTs 1st way
    // return str.split('').reverse().join('');
    //* BTs 2nd way
    let reversed = '';
    for ( let i = str.length - 1; i >= 0; i-- ) {
        reversed += str[ i ];
    }
    // console.log( reversed );
    return reversed;
}
reverseString( 'hello' );
module.exports = reverseString;