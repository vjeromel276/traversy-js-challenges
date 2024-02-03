function displayLikes ( names ) {
    if ( names.length > 0 && names.length < 4 ) {
        names.forEach( element => {

        } );
    } else if ( names.length < 1 ) {
        return 'no one likes this';
    }
}

module.exports = displayLikes;
