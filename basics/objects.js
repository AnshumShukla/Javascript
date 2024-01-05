//  through constructor = singleton

// object literals
const sym = Symbol("key1")
const sym2 = Symbol("key2")
const user = {
    name : "anshum",
    sym : "kaka",
    age : 20, 
    [sym2]: "kaka1",
    college :" abesit",
    "friend": "pranav"
}
console.log(user.friend);
console.log( typeof user.sym);
console.log( typeof user.sym2);
 user.fun = function () {
    console.log(`hello MR. , ${this.name}`);
 }
 console.log(user.fun());