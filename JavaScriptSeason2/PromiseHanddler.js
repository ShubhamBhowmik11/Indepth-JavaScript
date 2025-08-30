const cart = ["jeans", "kurt", "shirt"
];
let promise = CreateOrder(cart);
promise.then(function (orderid) {
      console.log(orderid);
   return processPayment(orderid);
}).
then(function(value){
 console.log(value);
}).
catch(function (err) {
      console.log(err.message);
})
// this catch function only for above or before this function handle;
.then(function(orderid){
      console.log("it is definitely called");
})
function CreateOrder(cart) {
      let pr = new Promise(function (resolve, reject) {
            if (!Validate(cart)) {
                  let error = new Error("This is a not Valid");
                  reject(error);
            }
            let order = "12345"
                  resolve(order);
      })
      return pr;

}
function Validate(cart) {
      return true;
}
function processPayment(id){
      return new Promise(function(resolve,reject){
            resolve("Payment is sucessful proceed");
      })
}