// Get age from console arguments and parse as a number
let ageString = process.argv[2]
let age = parseInt(ageString)

// Use conditional statements to categorize the age
if (age < 21) {
    console.log("You are very young")
}
else if (age < 30) {
    console.log("You are a budding adult")
}
else if (age < 40) {
    console.log("You are an adult. Well done, you now have scary responsibilities and people expect things of you")
}
else if (age < 55) {
    console.log("You are middle-aged (old)")
}
else if (age < 65) {
    console.log("You are straight-up old")
}
else {
    console.log("You are probably senile")
}
