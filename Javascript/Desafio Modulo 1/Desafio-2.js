
function pares(x, y) {
  // código aqui
if ((x % 2 == 0) && (y % 2 == 0)) {
  return x, y;
} else if (x % 2 == 0) {
  return x;
} else if (y % 2 == 0) {
  return y;
} else {
  console.log("insira um valor Valido!");
}

}
console.log(pares(4, 2));



