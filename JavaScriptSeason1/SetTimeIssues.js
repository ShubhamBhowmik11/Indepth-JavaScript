console.log("start");
setTimeout(function cb(){
      console.log("call break")
},0);


// setTimeout(function cb(){
//       console.log("call break")
// },5000);

  let start = new Date().getTime();
  let end = start;
 while(end<start + 10000){
      end = new Date().getTime();
 }
console.log("end");
 // In javascript, setTimeout and setInterval are function used to schedule tasks to run after a specific amount of time
 // they're both part of the web API's provided by the browser (or Node.js in a server environment), are they allow you to create delays or repeated actions in your code.