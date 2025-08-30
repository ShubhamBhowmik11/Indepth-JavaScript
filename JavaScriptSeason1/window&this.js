var a = 10;
function a() {
      var a = 100;
}
console.log(window.a);
console.log(this.a);
console.log(a);
console.log(window);