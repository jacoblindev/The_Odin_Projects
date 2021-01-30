const repeatString = function(str, num) {
    let rsStr = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            rsStr += str;
        }
    } else {
        rsStr = 'ERROR';
    }
    return rsStr;
}

module.exports = repeatString
