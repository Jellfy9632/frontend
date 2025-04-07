// 화살표 함수

const myFunc1 = () => {};

const showMessage = () => console.log("안녕하세요");

const multiply = (x, y) => console.log(`${x}, ${y}`);

const myFunc3 = (x, y) => x * y;

const check2 = (x) => {
  if (x % 3 == 0 && x % 9 == 0) {
    return "박수 x2";
  } else if (x % 3 == 0) {
    return "박수";
  } else {
    return "통과";
  }
};

const fruits = ["사과", "망고", "바나나", "수박", "포도", "자두"];

fruits.forEach(function () {});
fruits.forEach((element) => console.log(element));
