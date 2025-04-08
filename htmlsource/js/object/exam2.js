// 2개의 주사위를 던졌을때 나오는 눈을 (5,3) 출력하고
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인 경우 실행 중단

while (true) {
  const d1 = Math.round(Math.random() * 7);
  const d2 = Math.round(Math.random() * 7);
  if (d1 + d2 != 5) {
    console.log(`( ${d1}, ${d2}) 합 : ${d1 + d2} `);
  } else {
    console.log(`( ${d1}, ${d2}) 합 : ${d1 + d2} 종료`);
    break;
  }
}

// 로또 번호 6개를 추출하여 배열에 담은 후 출력
// 1~45
// const lotto = [];
// for (let i = 0; i < 6; i++) {
//   lotto[i] = Math.round(Math.random() * 46);
// }
// console.log(lotto);

let lottoArr = [];
while (true) {
  let lotto = Math.floor(Math.random() * 46) + 1;
  if (lottoArr.indexOf(lotto) == -1) {
    lottoArr.push(lotto);
  }

  if (lottoArr.length > 5) break;
}
console.log("이번 주 로또 번호 : " + lottoArr);
