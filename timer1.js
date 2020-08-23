let args = process.argv.slice(2);

const input = function(num) {
  if(!num) return

  if(num < 0 && num === NaN) return;
} 

  for(let alarm of args) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`${alarm} seconds\n`)
    }, alarm * 1000)
}

input(args);