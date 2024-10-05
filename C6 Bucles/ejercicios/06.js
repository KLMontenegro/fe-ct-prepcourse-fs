function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let contador = 0;
  while(num >= 1){
    contador = contador + 1;
    num = num / 10;
  }
  if(contador === 3){
    return true;
  }
    return false;
}

module.exports = tieneTresDigitos;
