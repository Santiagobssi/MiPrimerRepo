/**
* Preguntas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      enunciado: {
        type: 'text'
      },
      
      puntaje: {
        type: 'float'
      },
      
      opcionCorrecta: {
        type: 'text'
      },
      
      tipoPregunta: {
        type: 'string'
      }
  }
};

