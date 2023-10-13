const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  
  const peopleTwo = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  
  const peopleThree = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  
  
  const findTheOldest = function (people){
    return people.reduce((oldest, current) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
      
      return oldestAge < currentAge ? current : oldest
    })
    
  }
  
  const getAge = (birth, death) => {
    if(!death){
      death = new Date().getFullYear()
    }
    return death - birth
  }
  
  
  console.log(findTheOldest(people))
  console.log(findTheOldest(peopleTwo))
  console.log(findTheOldest(peopleThree))
  
  

// Do not edit below this line
module.exports = findTheOldest;
