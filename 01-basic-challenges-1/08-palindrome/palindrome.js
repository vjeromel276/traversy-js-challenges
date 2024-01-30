function isPalindrome ( str ) {
    return str.toLowerCase().replace(/[^a-z0-9]/g,'') === [ ...str ].reverse().join( '' ).toString().toLowerCase().replace(',','').replace(/[^a-z0-9]/g,'');
}
module.exports = isPalindrome;
/**
 * racecar
 * 
 */