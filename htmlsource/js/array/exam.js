let numArr = [57, 273, 586, 32, 57, 103, 312, 2];

// 최소값, 최대값 출력

let max = numArr[0],
  min = numArr[0];

// for (let index = 0; index < numArr.length; index++) {
//   if (numArr[index] > max) {
//     max = numArr[index];
//   } else if (numArr[index] < min) {
//     min = numArr[index];
//   }
// }

for (const num of numArr) {
  if (max < num) max = num;
  if (min > num) min = num;
}

console.log(`최대값 : ${max}`);
console.log(`최소값 : ${min}`);
