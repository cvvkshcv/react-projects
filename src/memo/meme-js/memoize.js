// /*
// Create memoize function:
// addTillN(n)

// n = 5 -> 1 + 2 + 3 + 4 + 5
// n = 10 -> 1 + 2 + ... + 10
// */
// let cache = {};
// // {}
// function addTillN(n) {

//   if (cache[n] !== undefined) {
//     console.log('cached result ', cache[n]);
//     return cache[n];
//   }
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   cache[n] = sum;
//   console.log('sum is: ' + sum);
//   return sum;
// }

// addTillN(5);
// addTillN(10);
// addTillN(10);

// addTillN(10000);
// addTillN(5);
// addTillN(10000);
// addTillN(10000);
// addTillN(10000);
// addTillN(10000);









/*implement setInterval using setTimeout with clearInterval functionality.*/
var id;
function cstmSetInterval(fn, ms) {
  id = setTimeout(function () {
    if (typeof fn === "function") {
      fn();
    } else {
      throw new Error("Expecting a function as input parameter");
    }
    cstmSetInterval(fn, ms);
  }, ms);
  return id;
  //consoling out the setTimeout ID
  // console.log(id);
}
function clearCstmInterval(id) {
  clearTimeout(id);
  //console.log("id", id)
}

cstmSetInterval(console.log.bind(null, "hello world"), 1000);

setTimeout(() => {
  console.log('Stopping the timer')
  clearCstmInterval(id);
}, 5000)
console.log("id " + id);
