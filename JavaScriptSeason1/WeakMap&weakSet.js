// WeakSet and WeakMap is only consist of object , they not consist of any primitive value in it.
let weakMap = new WeakMap();

let obj = { name: "Adam"};

weakMap.set(obj,"Employee");
console.log(weakMap.get(obj));



let weakSet = new WeakSet();

let obj1 = { name: "Adam"};


weakSet.add(obj1,"set");
console.log(weakMap.has(obj));