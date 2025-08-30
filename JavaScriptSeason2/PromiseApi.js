const a1 = new Promise(function(resolve,reject){
      setTimeout(()=>resolve("a1 Sucess"),10000);
}) 
const a2 = new Promise(function(resolve,reject){
      setTimeout(()=>resolve("a2 Sucess"),2000);
})
const a3 = new Promise(function(resolve,reject){
      setTimeout(()=>reject("a3 reject"),1000);
})
// Promise.all([a1,a2,a3])
// .then(function(val){
//       console.log(val);
// }).catch(function(err){
//       console.log(err);
// })
// Promise.allSettled([a1,a2,a3])
// .then(function(val){
//       console.log(val);
// }).catch(function(err){
//       console.log(err);
// })
Promise.race([a1,a2,a3])
.then(function(val){
      console.log(val);
}).catch(function(err){
      console.log(err);
})
Promise.any([a1,a2,a3])
.then(function(val){
      console.log(val);
}).catch(function(err){
      console.log(err);
})