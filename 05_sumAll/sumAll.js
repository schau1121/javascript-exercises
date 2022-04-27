const sumAll = function(low, high) {
    if(low > high) {
        return sumAll(high, low);
    }

    if(typeof low != "number" || typeof high != "number" || low < 0 || high < 0) {
        return "ERROR";
    }

    let out = low;
    for(let i = low + 1; i <= high; i++) {
        out += i;
    }
    return out;
};

// Do not edit below this line
module.exports = sumAll;
