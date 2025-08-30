// Event Bubbling

// document.querySelector(".outer").addEventListener("click",()=>{
//       console.log("outer");
// })

// document.querySelector(".mid").addEventListener("click",()=>{
//       console.log("mid");
// })
// document.querySelector(".inner").addEventListener("click",()=>{
//       console.log("inner");
// })

// Event Capturing
document.querySelector(".outer").addEventListener("click",()=>{
      console.log("outer");
},true)

document.querySelector(".mid").addEventListener("click",()=>{
      console.log("mid");
},true)
document.querySelector(".inner").addEventListener("click",()=>{
      console.log("inner");
},true)