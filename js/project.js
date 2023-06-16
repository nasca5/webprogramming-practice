const method = "GET";
const url = "https://reqres.in/api/products/10";
let xhr = new XMLHttpRequest();
xhr.open(method, url);

xhr.send();

xhr.onload = function()
{
  const res = xhr.response;
  const data = JSON.parse(res);
  const info = document.querySelector(".info");
  info.innerHTML = `상품명 : ${data.data.name}<br>생산 년도 : ${data.data.year}`;
}
