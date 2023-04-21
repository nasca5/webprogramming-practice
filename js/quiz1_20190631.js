const F = document.querySelector("#First_num");
const S = document.querySelector("#Second_num");
const button = document.querySelector("button");
let result = document.querySelector("#result");

button.onclick = function () {
  result.innerText = getGCD(F.value, S.value);
};

function getGCD(a, b) {
  let max = a > b ? a : b;
  let GCD;
  for (let i = 1; i <= max; i++) {
    if (a % i === 0 && b % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}
