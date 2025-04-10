// tab-content 보여주기 : show 클래스명
// 메뉴 선택 : orange

// Products 클릭 + 첫번째 tab-content

// Information 클릭 + 두번째 tab-content
// -Products,Shipping : orange 제거 / show 제거

// Shipping 클릭 + 세번째 tab-content

// const btns = document.querySelectorAll(".tab-button");
// const lists = document.querySelectorAll("li");
// const tabcons = document.querySelectorAll(".tab-content");

// btns[0].addEventListener("click", () => {
//   lists[0].className = "tab-button orange";
//   lists[1].className = "tab-button";
//   lists[2].className = "tab-button";
//   tabcons[0].classList = "tab-content show";
//   tabcons[1].classList = "tab-content ";
//   tabcons[2].classList = "tab-content ";
// });

// btns[1].addEventListener("click", () => {
//   lists[0].className = "tab-button ";
//   lists[1].className = "tab-button orange";
//   lists[2].className = "tab-button ";
//   tabcons[0].classList = "tab-content ";
//   tabcons[1].classList = "tab-content show";
//   tabcons[2].classList = "tab-content ";
// });

// btns[2].addEventListener("click", () => {
//   lists[0].className = "tab-button ";
//   lists[1].className = "tab-button ";
//   lists[2].className = "tab-button orange";
//   tabcons[0].classList = "tab-content ";
//   tabcons[1].classList = "tab-content ";
//   tabcons[2].classList = "tab-content show";
// });

const tabBtns = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 모든 li orange 제거
    tabBtns.forEach((item) => item.classList.remove("orange"));
    // 현재 눌러진 li orange 추가
    e.target.classList.add("orange");
    // 모든 div의 show 제거
    tabContents.forEach((element) => {
      element.classList.remove("show");
    });
    // 현재 눌러진 li와 같은 순서인 div에 show 추가
    tabContents[idx].classList.add("show");
  });
});
