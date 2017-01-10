/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        nombre: {
            type: 'string',
            enum: ['Bulldog', 'Chihuahua', 'Pitbul'],
            required: true
        },
        
        //Mascotas es el nombre en plural del modelo a relacionarse.
        mascotas: {
            //Collection es el nombre dl Medelo en Sails
            collection: 'Mascota',
            // Via es el campo por el cual se vaa a relacionar
            via: 'idRaza'
        }


    }
};