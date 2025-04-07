// 연산자
// 산술, 비교, 연결
let a = 4,
  b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b); // 자바 몫만
console.log("a % b = ", a % b);

// + : 연결 연산자
let c = "3";
console.log("a + c", a + c);

// -,*,/,% : 문자와 숫자의 산술연사

console.log("\n--문자와 숫자의 산술연산");
console.log("a - c = ", a - c);
console.log("a * c = ", a * c);
console.log("a / c = ", a / c);
console.log("a % c = ", a % c);

// 비교 연산자 : == (값 비교), !=(값비교), === (값과 타입 비교), !==(값,타입 비교)
let d = "4";
console.log("a == d", a == d); // true 4 == "4"  타입비교 안 함
console.log("a === d", a === d); // false 4 === "4" 타입 비교 함
console.log("a != d", a != d); // false
console.log("a !== d", a !== d); // true

// 단항 연산자 ++, --
