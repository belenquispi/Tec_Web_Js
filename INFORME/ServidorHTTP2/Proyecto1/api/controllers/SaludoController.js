/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    hola: function (req, res) {
        var parametros = req.allParams();

        if (req.method == 'GET') {

            res.json({
                    nombre: 'Hola get',
                    para:parametros
                });


        } else {

            if (req.method == 'POST') {
                res.json({
                    nombre: 'Hola post'
                });
            } else {
                res.json({
                    nombre: 'Hola a todos'
                });
            }

        }

    },
    adios: function (req, res) {
        res.send('Adios');
    },
    queTal: function (req, res) {
        res.send('Que Tal');
    }



	
};

