const bttn = document.querySelector('.popup-bttn');
const popWidth = 600;
const popHeight = 500;

bttn.addEventListener('click', () => {
  let left = (screen.availWidth - popWidth) / 2;
  let top = (screen.availHeight - popHeight) / 2;
  window.open('notice.html', 'event', `width = ${popWidth} height = ${popHeight} left = ${left} top = ${top}`);
});

bttn.onclick =popUp;