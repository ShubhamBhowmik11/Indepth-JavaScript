// scope = where  can you acesses specific variable and function in your code
// Lexical Environment = local memory + reference of Lexical Environment parent
// scope chaining =  chaining local to lexical Environment parent 
function  a(){
      var b = 10;
      c();
      function c(){
            console.log(10);
      }
}
a();