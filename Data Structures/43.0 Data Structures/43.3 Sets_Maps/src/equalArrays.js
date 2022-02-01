/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
    a1.sort();
    a2.sort();
    return Array.isArray(a1) && Array.isArray(a2) && a1.length === a2.length && a1.every((value, index) => value === a2[index])
}

module.exports = isEqual;

