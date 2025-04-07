// 1. 함수선언방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트

function plus(x, y) {
  return x + y;
}

console.log(plus(5, 6));

// 2. 함수표현식으로 1번 변경

const plus2 = function (x, y) {
  return x + y;
};

console.log(plus2(1, 7));

// 3. 1~10 까지 더하는 작업을 함수 표현식으로 작성

const stt = function () {
  let stt = 0;
  for (let i = 0; i < 11; i++) {
    stt += i;
  }
  console.log(`1~10을 전부 더한 값 : ${stt}`);
};

stt();

// 4. 숫자를 인자로 받아서 그 수가 3의 배수인지 확인
//      3의 배수라면 박수 출력, 아니라면 통과 출력

function check1(x) {
  if (x % 3 == 0) {
    return "박수";
  } else {
    return "통과";
  }
}

console.log(check1(12));

// 5. 4번 개선
//     + 9의 배수인 경우 박수 x2출력

function check2(x) {
  if (x % 3 == 0 && x % 9 == 0) {
    return "박수 x2";
  } else if (x % 3 == 0) {
    return "박수";
  } else {
    return "통과";
  }
}

console.log(check2(41));
console.log(check2(96));

// 6. 공인중개사 시험 점수를 입력하면 합격여부를 알려주는 함수
//      과목은 2과목이라 하고, 두 과목 합해서 120점 이상이면 합격
//      한 과목이40점 미만이면 과락으로 불학격

function pnp(x, y) {
  if (x >= 40 && y >= 40 && x + y >= 120) {
    return "합격";
  } else {
    return "과락으로 불합격";
  }
}

console.log(pnp(39, 81));
