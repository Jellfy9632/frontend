// 년, 월 , 일 가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  // 어제날짜 구하기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 월은 0부터 시작
  const day = today.getDate() - 1; // 어제를 구해야 함

  // 년 월 일 분리 = =>요소 안에 보여주기
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

document.querySelector("button").addEventListener("click", () => {
  // 사용하자 입력한 연 월 일 가져오기
  const targetDt = txtYear.value + selMon.value + selDay.value;

  const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=35c40f786cf0df7b258a96bcd1d5e202&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;

      let list = ``;
      boxList.forEach((movie) => {
        //순위      영화명
        // rank,  rank,Inten, movieNm
        // 1(▲ 1),   승부
        list += `${movie.rank} 위`;
        const rankInten = parseInt(movie.rankInten);
        if (rankInten > 0) {
          list += `(▲`;
        } else if (rankInten < 0) {
          list += `(▼`;
        } else {
          list += `(-`;
        }
        list += ` ${movie.rankInten})`;
        list += `<a href='#' ${movie.movieCd} onclick='javascript:movieInfo(${movie.movieCd})' >${movie.movieNm}</a> `;
        list += `<br> `;

        document.querySelector("#rank").innerHTML = list;
      });
    });
});

// 영화상세정보

const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=35c40f786cf0df7b258a96bcd1d5e202&movieCd=${movieCd}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.movieInfoResult.movieInfo);
      // ul,li로 작성
      const movieInfo = data.movieInfoResult.movieInfo;

      // 영화제목 movieNm
      // 영어제목 movieNmEn
      //     // 상영시간 showTm
      const movieNm = movieInfo.movieNm;
      const movieNmEn = movieInfo.movieNmEn;
      const showTm = movieInfo.showTm;

      let result = `<ul> 영화상세정보`;

      result += `<li>영화제목 : ${movieNm}</li>`;
      result += `<li>영어제목 : ${movieNmEn}</li>`;
      result += `<li>상영시간 : ${showTm} 분</li>`;

      //감독
      let directorNm = "";
      movieInfo.directors.forEach((director) => {
        directorNm += director.peopleNm + ", ";
      });
      result += `<li>감독 : ${directorNm}</li>`;

      let actorNm = "";
      movieInfo.actors.forEach((actor) => {
        actorNm += actor.peopleNm + ", ";
      });
      result += `<li>배우 : ${actorNm}</li>`;
      result += `</ul>`;

      document.querySelector("#info").innerHTML = result;
    });
};
