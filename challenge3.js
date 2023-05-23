// Overall goal: Create a function that returns a string with all instances of "s" removed
// Input: String
// Output: String
// Create a function that accepts a string as a parameter
function deesser(string) {
// Check if the string has a letter s in it
    if (string.includes("s")) {
        // Remove all instances of the letter s
        var newString = string.replaceAll("s", "");
        return newString;
    }
        
}
console.log(deesser("abase"))
