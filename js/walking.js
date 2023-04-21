const result = document.querySelector('#result');
const firstday = new Date('2021-07-01'); //처음 걷기 시작한 날
const today = new Date(); // 오늘

let passedTime = today.getTime() - firstday.getTime(); //처음 걷기 시작한 날로부터 지금까지 흐른 시간
let passedDay = Math.round(passedTime / (1000*60*60*24));

result.innerHTML = passedDay;