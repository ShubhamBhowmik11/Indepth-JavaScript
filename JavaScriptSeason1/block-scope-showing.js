//componenet statement = block 

//if condition for single statement 
if (true) true;


//if condition for multiple statement 


if (true) {
      //it grouping the  statements  and convert in  single statement
      false;
      true;
}


//Scope{
//    Block Scope
//    Global Scope
//    Script Scope   
// }

//   shadowing
//   elligal shadowing
var a = 100; 
{
   var a = 10;
   let b = 20;
   const c = 30;
   console.log(a);
   console.log(b);
   console.log(c);
}
console.log(a);

//   elligal shadowing

// let aa=10;
// {
//       var aa = 10;
//       console.log(a);
// }
// console.log(a);

// ligal shadowing
let aa=10;
{
     let aa = 100;
      console.log(aa);
}
// console.log(aCla);