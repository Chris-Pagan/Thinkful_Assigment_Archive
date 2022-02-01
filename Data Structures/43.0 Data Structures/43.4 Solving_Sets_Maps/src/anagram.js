/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {

    if (s1.length !== s2.length){
        return false
    }
    let str1 = s1.toLowerCase().split('').sort().join('')
    let str2 = s2.toLowerCase().split('').sort().join('')

    if (str1 === str2 ) {
        return true;
    } else {
        return false;
    }
}

module.exports = anagram;
