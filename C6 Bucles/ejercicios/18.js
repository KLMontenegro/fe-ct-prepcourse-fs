function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (Math.sign(a) === -1 || Math.sign(b) === -1) {
    return 0;
  }
  
  if (a > b) {
    let Temp = a;
    a = b;
    b = Temp;
  }
  
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto = producto * i
  }
  return producto;
}

module.exports = productoEntreNúmeros;