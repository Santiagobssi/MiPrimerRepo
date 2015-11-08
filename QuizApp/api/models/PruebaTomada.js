/**
* PruebaTomada.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      horaEmpIntento: {
        type: 'datetime'
      },
      
      horaFinIntento: {
        type: 'datetime'
      },
      
      numIntentosTomados: {
        type: 'integer'
      },
      
      calificacion: {
        type: 'float'
      },
      
      tiempoTomado: {
        type: 'datetime'
      },
      
      fechaTomada: {
        type: 'date'
      }

  }
};

