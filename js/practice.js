const selectmenu = document.querySelector("#major");

function displaySelect() {
  let selectedText = selectmenu.options[selectmenu.selectedindex].innerText;
  alert(`[${selectedText}]를 선택하셨습니다.`);
}

selectmenu.onchange = displaySelect;
