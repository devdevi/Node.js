function iniciar() {
    console.log("Manipulador de petición 'iniciar' ha sido llamado.");
    function sleep(milliSeconds){
        //obten la Hora actual
        var starTime = new Date().getTime();
        //atasca , la cpu
        while (new Date().getTime() < starTime.milliSeconds);
    } sleep(10000)
    return 'Hola inciar'
  }

  function subir() {
    console.log("Manipulador de petición 'subir' ha sido llamado.");
    return 'hola Subir'
  }
  exports.iniciar = iniciar;
  exports.subir = subir;
