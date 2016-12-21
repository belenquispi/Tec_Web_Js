/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string',
            minLength: 5
        },
        apellido: {
            type: 'string',
            minLength: 5
        },
        email: {
            type: 'string',
            email: true,
            defaultsTo: 'correo@valido.com'
        },


    }
};