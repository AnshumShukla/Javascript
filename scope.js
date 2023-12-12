if (true) {
    var a =10
    let b =30
    const c = 50
    console.log("inner:",c);
}
 var a = 39;
 const b = 40
console.log(a);
console.log(b);
console.log(c);
// therefore var is not used because of the accessibility in the code

function one(){
     const username ="anshum"

   function two(){
    const player = 10
    console.log(username)

   }
   console.log(player);   
}
one()