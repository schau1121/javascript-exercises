const removeFromArray = function(arr, ...args) {
    let out = arr.filter(val => !args.includes(val));
    return out;
};

// Do not edit below this line
module.exports = removeFromArray;
