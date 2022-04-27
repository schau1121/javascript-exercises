const findTheOldest = function(people) {
    let index = 0;
    let max_age = 0;
    let curr_age;

    for(let i = 0; i < people.length; i++) {
        if(!people[i].hasOwnProperty("yearOfDeath")) {
            curr_age = 2022 - people[i].yearOfBirth;
        } else {
            curr_age = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        if(curr_age > max_age) {
            max_age = curr_age
            index = i;
        }
    }

    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
