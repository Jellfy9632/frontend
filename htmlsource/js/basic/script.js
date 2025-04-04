//usa sectO]

// alert("test")

// 줄 바꿈이 있다면 세미콜론 생략가능

// 자바 스크립트 변수
// 타입 없음
// let, const, var(예전방식)
// let : 변수 선언 var: 유연한 변수선언방식
//  const : 상수 선언

let  a = 3;
console.log(typeof a); // number
console.log(a);
a = "test";
console.log(typeof a); // string
console.log(a);

const b = 15;
console.log(b);
// b=20;
// console.log(b); //TypeError: Assignment to constant variable.

{
    let a = 333;
    console.log("block-scope", a);
}

// 변수 범위
// var : function scope
// let, contast : block-scoped
function foobar(){
    var foo = 5
    console.log(too)
}

// console.log(too)
if(true){
    let bb = 5;
    console.log("let block scope",bb);
}
console.log ("let block scope", bb); //ReferenceError: bb is not defined