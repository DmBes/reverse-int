module.exports = function reverse (n) {
    n =  n< 0 ? n * -1 : n;
    let str = '' + n
    let result = ''

    for (let i = str.length - 1; 0 <= i ; i--) {
        result += str[i]
    }
    return +result;
}
