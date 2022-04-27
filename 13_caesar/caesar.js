const caesar = function(str, shift) {
    let out = "";
    let reduced_shift = shift % 26;

    for(let i = 0; i < str.length; i++) {
        let curr_char = str[i];
        if(curr_char.match(/[a-z]/i)) {
            let charCode = curr_char.charCodeAt() + reduced_shift;
            if(curr_char == curr_char.toUpperCase()) {
                //uppercase
                if(charCode < 65) {
                    charCode += 26;
                }
                if(charCode > 90) {
                    charCode -= 26;
                }
            } else {
                //lowercase
                if(charCode < 97) {
                    charCode += 26;
                }
                if(charCode > 122) {
                    charCode -= 26;
                }
            }
            out += String.fromCharCode(charCode);
        } else {
            out += curr_char;
        }
    }
    return out;
};

/*
retain capitalization
shouldnt shift punctuation
wrap around alphabet

if not punctuation:
    if capitalized:
        shift charCode within bounds of capitalized unicode values
    else:
        shift charCode within bounds of uncapitalized unicode values
*/



// Do not edit below this line
module.exports = caesar;
