const sumAll = function() {
    let arr = [];
    for (let arg of arguments) arr.push(arg);
    let notPositiveNumbers = arr.map(e => typeof e !== 'number' ? 'ERROR' : e < 0 ? 'ERROR' : 0).includes('ERROR');
    if (!notPositiveNumbers) {
        let rs = 0;
        for (let i = Math.min(...arr); i <= Math.max(...arr); i++) rs += i;
        return rs;
    } else {
        return 'ERROR';
    }
}

module.exports = sumAll
