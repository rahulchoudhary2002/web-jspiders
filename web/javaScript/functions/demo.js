function Demo(){
    console.log('hello');
}

Demo();
// console.log(Demo());

function fun(a,b){
    let c=a+b;
    console.log(c);
}

var a=10;//global
let b =12;//script
const c=20;//script

if(true){//any block other than fution  ex:->if else loop
    var a1=40;//global
    let b1=50;//block
    const c1=60;//block

}

function fun(){//local scope 
    var a2=70;//local
    let b2=80;//local
    const c2=90;//local
}
fun();


//! Function Expression

//function experation
let add=function sum(a,b){
console.log(a+b);
}
add(10,20);
