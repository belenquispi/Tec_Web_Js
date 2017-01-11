/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        // se accde con el siguiente URL http://localhost:1337/Usuario/crearUsuario


        //Guardar todos los parametros en la variable parametros



        crearUsuario: function (req, res) {

            //Guardar todos los parametros en la variable parametros

            var parametros = req.allParams();
            console.log(parametros);

            // localhost:1337/Usuario/crearUsuario?nombres=Alejandra&apellidos=Chavez

            // Post

            // correo:alejandra.chavez@gmail.com

            //Validaciones 

            if (req.method == 'POST') {

                if (parametros.nombres && parametros.apellidos) {
                    //crear el usuarios

                    Usuario.create({
                        nombres: parametros.nombres,
                        apellidos: parametros.apellidos,
                        email: parametros.email
                    }).exec(function (err, usuarioCreado) {
                        if (err) {
                            return res.serverError();
                        }

                        sails.log.info(usuarioCreado);
                        return res.ok(usuarioCreado);
                    });
                } else {
                    // bad Request

                    return res.badRequest('No envia todos los parametros');
                }
            } else {
                return res.badRequest('Metodo invalido');
            }

        },

        crearUsuarioForm: function (req, res) {
                var parametros = req.allParams();
                console.log(parametros);

                if (req.method == 'POST') {

                    if (parametros.nombres && parametros.apellidos) {
                        //crear el usuarios

                        Usuario.create({
                            nombres: parametros.nombres,
                            apellidos: parametros.apellidos,
                            email: parametros.email
                        }).exec(function (err, usuarioCreado) {
                                if (err) {
                                    return res.serverError();
                                }

                                sails.log.info(usuarioCreado);
                                return res.view('vistas/home', {
                                    titulo: 'Inicio',
                                    numero: 1,
                                    mauricio: {
                                        nombre: 'Mauricio',
                                        cedula: 1718137159
                                    }
                                });
                            
                            })
                        }
                    }
                }