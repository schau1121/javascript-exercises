const getTheTitles = function(books) {
    let out = [];
    for(let i = 0; i < books.length; i++) {
        out = out.concat(books[i].title);
    }
    return out;
};

// Do not edit below this line
module.exports = getTheTitles;
