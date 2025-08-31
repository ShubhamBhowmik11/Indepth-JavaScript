let a = {
       name :"shubham"
}
let b = a; // shallow copy , it means both variable point to same memory location.
console.log(a,b);
b.name = "rits"
console.log(a); // That why,it affects both variable.

// There  are different ways to perform a deep copy.
// First way - Using spread operator
let c = {
       name:"vivek"
}
let d = {...c};
d.name="singh";
console.log(c,d);

// through in this ways we are unable to perform deep copy in nested object. For example
c.class = {
      section:"E",
      roll:"13"
}
console.log(c);
let e = {...c};
e.class.section="D"
console.log(c,e);


// Second Way - Using stringify
let f = {
      name:"shivam",
      class:"X"
}
let g =JSON.parse(JSON.stringify(f))
g.name="shomik"
console.log(f,g)
// by this method , we are unable  to copy the key which have value is function . For Example
let h = {
       name:"sanya",
       value: function(){

       }
}
let i =JSON.parse(JSON.stringify(h))
console.log(h,i);

// Thrid  way - Lodash Library , This is the best way - (optimise way)
import _ from 'lodash';

const original = {
  name: 'Shubham',
  details: {
    age: 24,
    address: {
      city: 'Kolkata'
    }
  }
};

// Deep Copy
const copied = _.cloneDeep(original);

// Change copied object
copied.details.address.city = 'Delhi';

console.log(original.details.address.city); // Output: Kolkata
console.log(copied.details.address.city);   // Output: Delhi

