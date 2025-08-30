// function j(){
      
//       for(var i=0;i<5;i++){
//       setTimeout(()=>{
//          console.log(i); 
//       },i*1000)
// }
//       console.log("hey shubham");
// }
// j();
 // first solution let type variable
// second solution for above problem
function k(){
      for(let i=1;i<=5;i++){
            function innerfun(i){
                  setTimeout(()=>{
                        console.log(i); 
                     },i*1000);
            }
       innerfun(i);     
      }
      console.log("i first executed");
}
k();