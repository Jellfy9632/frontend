const msg1 = new String("hello javascript");
const msg2 = String("HELLO JAVASCRIPT");

console.log(msg1);
console.log(msg2);

console.log(typeof msg1);
console.log(typeof msg2);

// ===: 값과 타입

console.log(msg1 === "hello javascript"); // false
console.log(msg2 === "HELLO JAVASCRIPT"); // true

// const msg3
console.log(`특정 위치 문자 반환 : ${msg1.at(4)}`);
console.log(`특정 위치 문자 반환 : ${msg1.charAt(4)}`);
console.log(`특정 문자 위치 반환 : ${msg1.indexOf("j")}`);
console.log(`특정 문자 포함 여부 : ${msg1.includes("j")}`); //true
console.log(`문자열 부분 추출 : ${msg1.substring(6, 10)}`);
console.log(`문자열 부분 추출 : ${msg1.slice(6, 10)}`);
console.log(`문자열 연결 : ${msg1.concat(msg2)}`);
console.log(`문자열 변경 : ${msg1.replace("hello", "hi")}`);
console.log(`문자열 찾기 : ${msg1.match("ja")}`);
console.log(`문자열 찾기 : ${msg1.match("body")}`);
console.log(`문자열 찾기 (search - 시작위치) : ${msg1.search("ja")}`);
console.log(`문자열 소문자로 변경 : ${msg2.toLowerCase()}`);
console.log(`문자열 대문자로 변경 : ${msg1.toUpperCase()}`);
console.log(`문자열 공백제거 : ${"       hello   ".trim()}`);
