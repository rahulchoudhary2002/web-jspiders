//object 

let p1={
    pname :'MSD',
    jno: 7,
    team:'csk',
    isMarried:true,
    7:'fav no'
}

// console.log(Object.values(p1));
// console.log(Object.keys(p1));
// console.log(Object.entries(p1));

//object.seal
// Object.seal(p1);

delete p1.isMarried;
// console.log(Object.seal(p1));

p1.name='kerala';
console.log(Object.entries(p1));
Object.seal(p1);

delete p1.name;
console.log(Object.entries(p1));




