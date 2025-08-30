
const x = 1;
// x = 2;
a();
function a() {
      var x = 10;
      console.log(x);
}
console.log(x);

let b = function () {
      var x = 100;
      console.log(x);
}
b();