/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        nombre: {
        type: 'string'
      },

        apellido: {
        type: 'string'
        },

        email: {
        type: 'string',
        email: true,
        unique: true    
      },

        password: {
        type: 'string'
      },

        tipoUsuario: {
        type: 'string'
       
      }
  }
};

