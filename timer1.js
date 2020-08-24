let args = process.argv.slice(2);

const input = function(num) {

  if(!num) return

  let goodNums = num.filter(number => number > 0 && number !== NaN);
  for(let alarm of goodNums) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`${alarm} seconds\n`)
    }, alarm * 1000)
  }
};

input(args);

// filter takes an array and function as argumentfunction 
//filter(arr, filterFunc) {    
  //const filterArr = []; // empty array        
  // loop though array    
  //for(let i=0;i<arr.length;i++) {        
    //const result = filterFunc(arr[i], i, arr);        
    // push the current element if result is true        
    //if(result)             
    //filterArr.push(arr[i]);     }    
    //return filterArr;}