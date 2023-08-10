// from an array of hobbies, print those ending in -ing
// need to create an array of strings
// need to write a for loop to go through the array, and a conditional with a boolean to filter for the -ing ending
// need to print the strings ending in -ing to the console

var hobbies = ["skiing", "hockey", "painting", "martial arts", "singing"]
for (var i = 0; i < hobbies.length; i++) {
    if (hobbies[i].endsWith("ing") === true) {
    console.log(hobbies[i])
    }
}