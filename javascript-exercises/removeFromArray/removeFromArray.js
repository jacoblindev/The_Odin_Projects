const removeFromArray = function() {
    let rsArr = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (rsArr.includes(arguments[i])) rsArr.splice(rsArr.indexOf(arguments[i]), 1);
    }
    return rsArr;
}

module.exports = removeFromArray
