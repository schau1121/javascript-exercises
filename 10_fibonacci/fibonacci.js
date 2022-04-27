const fibonacci = function(num) {
    if(num < 1) {
        return "OOPS";
    }

    if(num == 1 || num == 2) {
        return 1;
    }

    let prev = 1;
    let curr = 1;
    let out;

    for(let i = 3; i <= num; i++) {
        out = curr + prev;
        prev = curr;
        curr = out;
    }
    return out;
};

/*
4
1 1 2 3
i = 4
prev = 2
curr = 3
out = 3

3
1 1 2

8
1 1 2 3 5 8 13 21
*/

// Do not edit below this line
module.exports = fibonacci;
