// console.log("시작");
// setTimeout(() => {
//   console.log("중간");
// }, 3000);
// console.log("마무리");

//  fetch
// fetch("서버주소").then("응답도착").then("도착한 응답 처리");

// console.log("시작");

// "https://jsonplaceholder.typicode.com/todos/1" 요청
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("마무리");
