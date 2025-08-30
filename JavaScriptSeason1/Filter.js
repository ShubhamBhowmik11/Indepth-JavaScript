const user = [
      {"name" : "shubham ","lastname" : "bhowmik","age" : "20"},
      {"name" : "shubham ","lastname" : "bhowmik","age" : "50"},
      {"name" : "shubham ","lastname" : "bhowmik","age" : "29"},
      {"name" : "shubham ","lastname" : "bhowmik","age" : "20"}
]
const output1 = user.filter(function(x){
      if(x.age < 30)
      return x.name;
}).map(function(x){
      return x.name;
})
const output2 = user.filter(function(x){
      if(x.age < 30)
      return x.name;
}).reduce(function(acc,curr){
      acc.push(curr.name);
      return acc;

},[])
console.log(output2);