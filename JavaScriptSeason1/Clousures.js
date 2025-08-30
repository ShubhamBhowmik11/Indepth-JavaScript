function x(){
      var a = 7;
     return function y(){
       console.log("hello");
      }
      Or 

      // return y;
}
// You can return the function
// you can passed function as parameter to the function;


// because  of above two property of  function , we have closures
var value =   x();
console.log(value);
value();

// Uses of Closures:
// -Module Design Pattern 
// -Currying
// -Function like once 
// -Memoize 
// -Maintaining state in async world 
// -setTimeouts
// -Iterators
// -and  many more


function outer(){
      let a=10;
      function inner(){
            console.log(a);
      }
      return inner;
}
let result = outer()();
console.log(result);