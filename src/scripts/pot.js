function potencia(base, expoente) {

    if (typeof base !== 'number' || typeof expoente !== 'number') {
      return 1;
    }

    var resultado = base ** expoente;

    return resultado;
}

module.exports = potencia;