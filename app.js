console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  for (let i = 1; i < count; i++) {
    if (i % 2 == 1) {
      console.log(i);
    } else {
      continue;
    }
  }
}
console.log(printOdds(55));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age, userName) {
  let aboveSixteen = "Congrats ${userName}, you can drive";
  let belowSixteen = "Sorry ${userName},but you need to wait until you are 16";
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}
console.log(checkAge(20));
