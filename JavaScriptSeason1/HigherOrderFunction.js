// DRY principle (don't repeat yourself)
const radius = [1, 2, 3, 4, 5];
const area = function (r) {
      return Math.PI * r * r;
}
const circumference = function (r) {
      return 2 * Math.PI * r;
}
const calculate = function (radius, logic) {
      let output = [];
      for (let i = 0; i < radius.length; i++) {
            output.push(logic(radius[i]));
      }
      return output;
}
Array.prototype.AdvanceCalculate = function (logic) {
      let output = [];
      for (let i = 0; i < this.length; i++) {
            output.push(logic(this[i]));
      }
      return output;
}
console.log(calculate(radius, area));
console.log(radius.AdvanceCalculate(circumference));