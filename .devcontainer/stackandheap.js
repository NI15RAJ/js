// types of memoty
//stack -primitive
//heap-nonprimitive

let namee="niraj"
let anothername= namee
anothername="chai" 

console.log(anothername);
console.log(namee);
let userone={
    email:"niraj@gamil.com",
        upi: "niraj@paytm",
}

let usertwo=userone
usertwo.email="niraj@google.com"

console.log(userone.email);
console.log(usertwo.email);

const name="niraj"
const repocount = 50

//console.log(name +repocount +"Value");

console.log(`Hello my name is ${name}
and my repocount is ${repocount}`);

const gamename = new String('niraj--mm-com')

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(3));

console.log(gamename.indexOf('m'));


const newstring=gamename.substring(0,4)
console.log(newstring);

const anotherstring=gamename.slice(-6,4)

console.log(anotherstring);


console.log(gamename.length);

const newmember="  niraj  "

console.log(newmember);

console.log(newmember.trim());

const url =" https://niraj.com/niraj%20maheshwari"

console.log(url.includes('sunder'));


console.log(url.replace('%20','-'));

console.log( gamename.split( '-'));

