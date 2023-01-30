(() => {
  type UserId = string | number | boolean; // CREO UN TIPO DE DATOS
  let userId: string | number | boolean;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      /*
      si entra a este if, va a manejar la varialble como un string
      por lo tanto vamos a tener disponible todos los metodos para este mismo.
      */
      return 'string';
    }
  }

  //Literal types
  type Sizes = 's' | 'm' | 'xl';
  let shirtSize: Sizes; // lo que estoy haciendo es recortar las posibilidades de los valores que pueda obtener esta variable
  shirtSize = 's';
  shirtSize = 'm';
  shirtSize = 'xl';
  shirtSize = 'xlssssss';
})();
