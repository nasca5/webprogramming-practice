// 입력했는지 판별하고 대답하기
/*let input = prompt("이름을 입력해주세요.");

if (input) {
  alert(`${input}님 어서오세요.`);
} else {
  alert("이름을 입력하지 않았습니다.");
}*/

// 짝수인지 홀수인지 출력하기
/*let usernumber = prompt("임의의 정수인 숫자를 입력해주세요.");

if (usernumber) {
  usernumber = parseInt(usernumber);
  usernumber % 2 === 0
    ? alert(`${usernumber}는 짝수입니다. : a`)
    : alert(`${usernumber}는 홀수입니다.`);
} else {
  alert("입력을 하지 않았습니다.");
}*/

//배열 출력하기
/*const student = ["Kim", "Park", "Lee", "Kang"];

for (let i = 0; i < student.length; i++) {
  document.write(` ${student[i]}`);
}*/

//for..each문 -> 배열의 크기가 정해져있지 않을 경우
/*const students = ["Park", "Kim", "Lee", "Kang"];

students.forEach(function (student) {
  document.write(`${student}. `);
});*/

//화살표함수
/*const students = ["Park", "Kim", "Lee", "Kang"];

students.forEach((student) => document.write(` ${student}. `));*/

//for...in문 -> 객체에서 사용할 수 있는 반복문, 배열도 객체이다.
/*const gitbook = {
  title: "깃&깃허브 입문",
  pubdate: "2019-12-06",
  pages: 262,
  finished: true,
};

for (key in gitbook) {
  document.write(`${key} : ${gitbook[key]}<br>`);
}*/

//for...of문 문자열이나 배열처럼 그 안의 값이 순서대로 나열되어 있는 객체를 iterable 객체라고 한다.
/*const students = ["Park", "Kim", "Lee", "Kang"];

for (let student of students) {
  document.write(`${student}. `);
}*/

//구구단 만들기, css 이용
/*for (let i = 2; i < 10; i++) {
  document.write("<div>");
  document.write("<h3>" + i + "단<h3>");
  for (let j = 1; j < 10; j++) {
    document.write(`${i} x ${j} = ${i * j}<br>`);
  }
  document.write("</div>");
}*/

//함수
/*function calcsum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let num = parseInt(prompt("몇까지 더할까요?"));

document.write(`1부터 ${num}까지 더하면 ${calcsum(num)}입니다.`);*/

//지역 변수, 전역 변수
/*function greeting() {
  var hi = "hello";
}

greeting();
console.log(hi);*/

/*let sum = function (a, b) {
  return a + b;
};

document.write(`함수 실행 결과 : ${sum(10, 20)}`);*/

//즉시 실행 함수
/*(function (a, b) {
  let sum = a + b;
  console.log(`함수 실행 결과 : ${sum}`);
})(10, 20);*/

//문자열 길이 계산기
/*const button = document.querySelector("#bttn");

button.addEventListener("click", () => {
  const word = document.querySelector("#word");
  const result = document.querySelector("#result");

  result.innerText = word.value.length;
});*/

//모달 박스
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const modalbox = document.querySelector("#modal-box");

open.addEventListener("click", () => {
  modalbox.classList.toggle("active");
  open.classList.toggle("active");
});

close.addEventListener("click", () => {
  modalbox.classList.toggle("active");
  open.classList.toggle("active");
});
