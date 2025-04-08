// 자바 스크립트 제공객체

const now = new Date();

console.log(now);
console.log("년 : " + now.getFullYear());
console.log("월 : " + now.getMonth()); // 월 0부터 시작
console.log("일 : " + now.getDate());
console.log("시 : " + now.getHours());
console.log("분 : " + now.getMinutes());
console.log("초 : " + now.getSeconds());

// 날짜 => 문자열

console.log("날짜 = > 문자열 : " + now.toLocaleString());
