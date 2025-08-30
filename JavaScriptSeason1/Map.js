// if you want to transform of any array then you can use map;
 
// example
let arr = [1,2,3,4,5];

// double of each element of array
function double(x){
      return x* x;
}
let output1 = arr.map(double);
console.log(output1);

// triple of each element of array
function triple(x){
      return x* x * x;
}
let output2 = arr.map(triple);
console.log(output2);

// binary of each element of array
function binary(x){
      return x.toString(2);
}
let output3 = arr.map(binary);
console.log(output3);