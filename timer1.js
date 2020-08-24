let args = process.argv.slice(2);

const input = function(num) {
  if (!num) return; // No numbers are provided ends immediately

  let goodNums = num.filter(number => number > 0 && number !== isNaN); // use filter method to take only numbers that are greater than 0 and is a Number
  for (let alarm of goodNums) { // loop through those goodNumbers
    setTimeout(() => {
      process.stdout.write('\x07'); // emit a beep
      process.stdout.write(`${alarm} seconds\n`); // console log out the number and seconds
    }, alarm * 1000); // number * 1 second
  }
};

input(args);