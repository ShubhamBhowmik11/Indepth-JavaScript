function Output(){
      let i=0;
     this.increamnet = function(){
    i++;
    console.log(i);
      }
     this.decreament =  function (){
            i--;
            console.log(i);
              }
}


let fun = new Output();
fun.increamnet();
fun.increamnet();

function input(){
 function inval(){
    console.log("hi");
  }
  return {inval};
 
  }
  let res = input();
 res.inval();