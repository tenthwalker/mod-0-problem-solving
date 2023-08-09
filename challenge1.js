// from an array of strings, print only those with 4 characters
// need to create an array containing strings of varying lengths
// need code to identify the length of each string, as well as a loop to test each one
// need to console.log the strings that have 4 characters

var strings = ["taco", "leaf", "banjo", "syllabus"];
function filter4Chars(strings) {
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length === 4) {
      console.log(strings[i])
    }
  }
} 
filter4Chars(strings);