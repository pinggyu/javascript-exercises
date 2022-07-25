const findTheOldest = function(peopleArray) {
    let oldestAge = 0;
    let oldestPerson = {};
    peopleArray.forEach((person) => {
        if (!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear();
        }
        let personAge = person.yearOfDeath - person.yearOfBirth;
        if (personAge > oldestAge){
            oldestAge = personAge;
            oldestPerson = person;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
