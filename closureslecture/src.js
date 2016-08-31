// inner function that saves a reference that would be private to the outer function
// function closure(param) {
//   return function() {
//     console.log(param);
//   }
// }
// var inner = closure("First");
// inner();
// var innerTwo = closure("Second");
// innerTwo();
//
// inner();


// for (var i = 0; i < 5; i++) {
//   var currentI = closure(i);
//   setTimeout(currentI, i * 1000)
// }
//
// function closure(savedReference) {
//   return function() {
//     console.log(savedReference)
//   }
// }

// function createGreeter(name, mood) {
//   var greeting = "Hello " + name + " you look " + mood + " today.";
//
//   return function() {
//     return greeting
//   }
// }
//
// var greetDontavious = createGreeter("Dontavious", "indecisive");
//
// supercalifragilisticespialidosious

function sum(num, num2) {
    if (num2 !== undefined) {
      return num + num2;
    }
    return function(innerNum) {
      return num + innerNum;
    }
}

sum(2, 3);
sum(2)(3);
var firstNum = sum(2);
firstNum(3);

//Module syntax

var personModule = (function() {
  var person = {
    name: "Dontavious",
    mood: "gloom",
    password: "peanuts1"
  };
  return {
    getName: function() {
      return person.name;
    },
    getMood: function() {
      return person.mood;
    },
    setMood: function(newMood) {
      person.mood = newMood;
    }
    setPassword: function(newPassword) {
      if (newPassword.length < 6) {
        return "Password must be longer"
      }
      person.password = newPassword;
    }
  }
})();
