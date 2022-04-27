const reverseString = function(str) {
    let length = str.length;
    let out = "";
    for(let i = length - 1; i >= 0; i--) {
        out += str.at(i);
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
