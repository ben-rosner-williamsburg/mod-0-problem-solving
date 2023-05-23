// Overall Goal: Print only strings that are 4 characters in length
// Input: Array
// Output: Strings
// Create an array of strings
var stringArr = ["I", "am", "an", "array", "of", "strings", "haha"];
// Iterate through the array
for (var i = 0; i < stringArr.length; i++) {
    // Store each string as a variable
    var string = stringArr[i]
    // Check if each string is equal to 4 characters
    if (string.length === 4) {
        // If a string is 4 characters, return it
         console.log(string)
    }
}