/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {

        if (req.method == "POST") {

            var parametros = req.allParams();

            if (parametros.nombres && parametros.apellidos) {

                var usuarioCrear = {
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }

                if (usuarioCrear.correo == "") {
                    delete usuarioCrear.correo
                }

                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {

                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Fallo al crear el Usuario",
                                rawError: err,
                                url: "/CrearUsuario"
                            }

                        });
                    }

                    Usuario.find()
                        .exec(function (errorIndefinido, usuariosEncontrados) {

                            if (errorIndefinido) {
                                res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Hubo un problema cargando los Usuarios",
                                        rawError: errorIndefinido,
                                        url: "/ListarUsuarios"
                                    }
                                });
                            }

                            res.view('vistas/Usuario/ListarUsuarios', {
                                usuarios: usuariosEncontrados
                            });
                        })

                })


            } else {

                return res.view('vistas/Error', {
                    error: {
                        desripcion: "Llena todos los parametros, apellidos y nombres",
                        rawError: "Fallo en envio de parametros",
                        url: "/CrearUsuario"
                    }

                });

            }


        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "Error en el uso del Metodo HTTP",
                    rawError: "HTTP Invalido",
                    url: "/CrearUsuario"
                }
            });

        }

    },

    borrarUsuario:function(req,res){
    var parametros=req.allParams;
    
    if(parametros.id)
        {
            Usuario.destroy({
                id:parametros.id
            }).exec(function(errorInesperado,UsuarioRemovido){
                if(errorInesperado){
                    return res.view('vistas/Error', {
                error: {
                    desripcion: "Tuvimos un Error Inesperado",
                    rawError: errorInesperado,
                    url: "/ListarUsuarios"
                }
            });
                    }
            })

        }else{
            
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos el ID para borrar al Usuario",
                    rawError: "No envió ID",
                    url: "/ListarUsuarios"
                }
            });
        }
},
    
    editarUsuario:function(req,res){
        var parametros=req.allParams;
    
    if(parametros.id && (parametros.nombres || parametros.apellidos || parametros.correo) )
        {
            var usuarioEditar = {
                nombres:parametros.nombres,
                apellidos:parametros.apellidos,
                correo:parametros.correo
            }
            if (usuarioEditar.nombres=="")
                {
                    delete usuarioEditar.nombres
                }
            if (usuarioEditar.apellidos=="")
                {
                    delete usuarioEditar.apellidos
                }
            if (usuarioEditar.correo=="")
                {
                    delete usuarioEditar.correo
                }
            
            Usuario.update({
                id:parametros.id
            },usuarioEditar).exec(function(errorInesperado,UsuarioRemovido){
                if(errorInesperado){
                    return res.view('vistas/Error', {
                error: {
                    desripcion: "Tuvimos un Error Inesperado",
                    rawError: errorInesperado,
                    url: "/ListarUsuarios"
                }
            });
                    }
            })

        }else{
            
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos el ID y nombre, apellido o correo ",
                    rawError: "No envió parametros ",
                    url: "/editarUsuario"
                }
            });
        }
        
    }
    
};