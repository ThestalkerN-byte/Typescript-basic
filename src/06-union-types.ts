(() => {
  let userId: string | number;

  function greeting(text: string | number) {
    if (typeof text === 'string') {
      /*
      si entra a este if, va a manejar la varialble como un string
      por lo tanto vamos a tener disponible todos los metodos para este mismo.
      */
      return 'string';
    } else {
      /*
      si entra a este if, va a manejar la varialble como un number
      por lo tanto vamos a tener disponible todos los metodos para este mismo.
      */
      return 'number';
    }
  }
})();
