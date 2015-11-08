/**
* Pruebas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      nombrePr: {
        type: 'string'
      },
      
      fechaATomarse: {
        type: 'date',
          fechaATomarse: true 
      },
      
      horaInicio: {
        type: 'datetime'
      },
      
      horaFin: {
        type: 'datetime'
      },
      
      tiempo: {
        type: 'datetime'
      },
      
      numIntento: {
        type: 'integer'
      },
      
      materia: {
        type: 'string'
      },
      
      organizacion: {
        type: 'string'
      },

  }
};

