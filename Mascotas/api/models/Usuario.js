/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');


module.exports = {

  attributes: {
    nombres: {
      type: 'string',
      minLength: 5,
      required: true
    },
    apellidos: {
      type: 'string',
      minLength: 5,
      required: true
    },
    correo: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      defaultsTo: "123456"
    },
    mascotas: {
      // Collection -> Nombre del Modelo en Sails
      collection: 'Mascota',
      // Via-> Es el campo por el cual vamos a relacionar FOREIGN KEY
      via: 'idUsuario'
    }
  },
  beforeCreate: function (values, cb) {

    sails.log.info(values);

    //         cb("hola") //Error
    //        cb() //OK

    Passwords.encryptPassword({
      password: values.password,
    }).exec({
      error: function (err) {
        cb(err)
      },
      success: function (result) {
        values.password = result;
        cb()
      },
    });
  },
  beforeUpdate: function (values, cb) {

    if (values.password) {
      Passwords.encryptPassword({
        password: values.password,
      }).exec({
        error: function (err) {
          cb(err)
        },
        success: function (result) {
          values.password = result;
          cb()
        },
      });
    } else {
      cb()
    }


  }


};
