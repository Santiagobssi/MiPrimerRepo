/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        nombre: {
        type: 'string',
        nombre: true
      },

        apellido: {
        type: 'string',
        apellido: true
      },

        email: {
        type: 'string',
        email: true,
        unique: true    
      },

        password: {
        type: 'string',
        password: true
      },

        tipo_usuario: {
        type: 'string',
        tipo_usuario: true
      }
  }
};

