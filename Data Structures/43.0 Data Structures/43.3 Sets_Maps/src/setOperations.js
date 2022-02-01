/**
 * return the union of two sets
 */
function union(s1, s2) {
    if (s1.size === 0 && s2.size === 0){
        return new Set();
    } else if (s2.size === 0){
        return s1;
    } else if (s1.size === 0){
        return s2
    }
    return new Set([...s1, ...s2]);
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
    return new Set([...s1].filter((i) => s2.has(i)));
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    return new Set([...s1].filter((i) => !s2.has(i)));
}

module.exports = { union, intersect, difference };
