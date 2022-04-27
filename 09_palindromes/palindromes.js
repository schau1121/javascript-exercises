const palindromes = function (str) {
    let input = str.toLowerCase();
    input = input.replace(/[^\w\s]|_/g, "");
    input = input.replace(/\s+/g, "");
    
    let l = 0, r = input.length - 1;
    while(l <= r) {
        if(input.charAt(l) !== input.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
