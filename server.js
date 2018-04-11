//  Modulo del servidor
// Luego llamamos a una de las funciones que el módulo http ofrece:
// createServer. Esta función retorna un objeto, y este objeto tiene
// un método llamado listen (escucha), y toma un valor numérico que indica
// el número de puerto en que nuestro servidor HTTP va a escuchar

// var http = require('http');

// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type': 'text/html'});
//     response.write('Hello World');
//     response.end();
// }).listen(8888);


// Eso es! Acabas de escribir un servidor HTTP activo.
// Probémoslo ejecutándolo y testeándolo. Primero ejecuta
// tu script con Node.js
  // REFACTORIZACION DE CODIGO

//   var http = require('http')
//   function onRequest(request,response){
//       console.log('peticion recibida')
//       response.writeHead(200,{'Content-Type': 'text/html'});
//       response.write('Hola Mundo');
//       response.end();
//   }
//   http.createServer(onRequest).listen(8888)

//   console.log('Servidor iniciado');
//REFACTORIZANDO VOLVIENDOLO UN MODULO

var http = require('http')
function iniciar() {
  function onRequest(request,response){
      console.log('peticion recibida')
      response.writeHead(200,{'Content-Type': 'text/html'});
      response.write('Hola Mundo');
      response.end();
  }
  http.createServer(onRequest).listen(8888)

  console.log('Servidor iniciado');
}

exports.iniciar = iniciar;