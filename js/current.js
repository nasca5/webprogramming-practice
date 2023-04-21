const today = new Date();

const displayDate = document.querySelector('#today');
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const day1 = today.getDay();

let day2 = '';

switch(day1) {
  case 0: 
    day2 = '일요일';break;
  case 1:
    day2 = '월요일';break;
  case 2:
    day2 = '화요일';break;
  case 3:
    day2 = '수요일';break;
  case 4:
    day2 = '목요일';break;
  case 5:
    day2 = '금요일';break;
  case 6:
    day2 = '토요일';break;
}

displayDate.innerHTML = `${year}:${month + 1}:${date}:<span style='font-weight:bold'>${day2}</span>`;

const displayTime = document.querySelector('#clock');

let clock = () => {
  let current = new Date();
  let hrs = current.getHours();
  let min = current.getMinutes();
  let sec = current.getSeconds();

  let period = 'AM';
  if(hrs === 12) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs -= 12;
    period = 'PM';
  }

  hrs = hrs < 10 ? '0' + hrs : hrs;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  displayTime.innerHTML = `${hrs}:${min}:${sec} ${period}`;
}

setInterval(clock, 1000);