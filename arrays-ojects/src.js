var myArray = [1, 2, 3, 4, 5];

function logger(array) {
  if (Array.isArray(array)) {
    array.forEach(function (item) {
      console.log(item);
    })
  }
}
logger(myArray);

var testString = "This is a string";
var newString = testString.split(" ");
console.log(newString);
