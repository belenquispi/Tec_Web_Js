/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home: function (req, res) {
    return res.view('vistas/home');
  },
  crearUsuario: function (req, res) {
    return res.view('vistas/Usuario/crearUsuario');
  },
  error: function (req, res) {
    return res.view('vistas/Error', {
      error: {
        descripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
        rawError: "Ruta equivocada",
        url: "/Inicio"
      }
    });
  },
  listarUsuarios: function (req, res) {
    Usuario.find()
      .exec(function (errorIndefinido, usuariosEncontrados) {
        if (errorIndefinido) {
          res.view('vistas/Error', {
            error: {
              descripcion: "Hubo un problema cargando los Usuarios",
              rawError: errorIndefinido,
              url: "/ListarUsuarios"
            }
          });
        }
        res.view('vistas/Usuario/ListarUsuarios', {
          usuarios: usuariosEncontrados
        });
      })
  },
  editarUsuario: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Usuario.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, UsuarioEncontrado) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              descripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarUsuarios"
            }
          });
        }
        if (UsuarioEncontrado) {
          return res.view("vistas/Usuario/editarUsuario", {
            usuarioAEditar: UsuarioEncontrado,
            inicioSesion: true
          });
        } else {
          return res.view('vistas/Error', {
            error: {
              descripcion: "El usuario con id: " + parametros.id + " no existe.",
              rawError: "No existe el usuario",
              url: "/ListarUsuarios"
            }
          });
        }
      })
    } else {
      return res.view('vistas/Error', {
        error: {
          descripcion: "No ha enviado el parametro ID",
          rawError: "Faltan Parametros",
          url: "/ListarUsuarios"
        }
      });
    }
  },
  crearMascota: function (req, res) {
    var parametros = req.allParams();
    Raza.find().exec(function (errorInesperado, razasEncontradas) {
      if (errorInesperado) {
        return res.view('vistas/Error', {
          error: {
            descripcion: "Se ha producido un error en la carga de las razas registradas",
            rawError: errorInesperado,
            url: "/"
          }
        })
      }
      return res.view('vistas/Mascota/crearMascota', {
        razas: razasEncontradas,
        idUsuarios: req.session.credencialSegura.id,
        idRazas: parametros.idRaza
      });
    });

  },
  listarMascotas: function (req, res) {
    var parametros = req.allParams();
    if (parametros.idUsuario == undefined && parametros.idRaza == undefined) {
      Mascota.find()
        .populate("idRaza")
        .exec(function (errorIndefinido, mascotasEncontradas) {
          if (errorIndefinido) {
            res.view('vistas/Error', {
              error: {
                descripcion: "Hubo un problema cargando las mascotas",
                rawError: errorIndefinido,
                url: "/ListarMascotas?idUsuarios=undefined&idRaza=undefined"
              }
            });
          }
          res.view('vistas/Mascota/listarMascotas', {
            mascotas: mascotasEncontradas,
            idRazas: undefined,
            idUsuarios: undefined
          });
        });
    } else {
      if (parametros.idUsuario != undefined && parametros.idRaza == undefined) {
        Mascota.find({
          where: {
            idUsuario: parametros.idUsuario
          }
        }).populate("idRaza").exec(function (errorIndefinido, mascotasEncontradas) {
          if (errorIndefinido) {
            res.view('vistas/Error', {
              error: {
                descripcion: "Hubo un problema cargando las mascotas",
                rawError: errorIndefinido,
                url: "/ListarMascotas"
              }
            });
          }
          res.view('vistas/Mascota/listarMascotas', {
            mascotas: mascotasEncontradas,
            idUsuarios: parametros.idUsuario,
            idRazas: undefined
          });
        });
      } else {
        if (parametros.idUsuario == undefined && parametros.idRaza != undefined) {
          Mascota.find({
            where: {
              idRaza: parametros.idRaza
            }
          }).populate("idRaza")
            .exec(function (errorIndefinido, mascotasEncontradas) {
              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    descripcion: "Hubo un problema cargando las mascotas",
                    rawError: errorIndefinido,
                    url: "/ListarMascotas"
                  }
                });
              }
              res.view('vistas/Mascota/listarMascotas', {
                mascotas: mascotasEncontradas,
                idRazas: parametros.idRaza,
                idUsuarios: undefined
              });
            });
        }
      }
    }
  },
  editarMascota: function (req, res) {
    var parametros = req.allParams();
    Raza.find().exec(function (errorInesperado, razasEncontradas) {
      if (errorInesperado) {
        return res.view('vistas/Error', {
          error: {
            descripcion: "Se ha producido un error en la carga de las razas registradas",
            rawError: errorInesperado,
            url: "/"
          }
        })
      }
      if (parametros.id) {
        Mascota.findOne({
          id: parametros.id
        }).populate("idRaza")
          .exec(function (errorInesperado, mascotaEncontrada) {
            if (errorInesperado) {
              return res.view('vistas/Error', {
                error: {
                  descripcion: "Error Inesperado",
                  rawError: errorInesperado,
                  url: "/ListarMascotas?idUsuarios=" + parametros.idUsuario + "idRazas=" + parametros.idRaza
                }
              });
            }
            if (mascotaEncontrada) {
              return res.view("vistas/Mascota/editarMascota", {
                inicioSesion: true,
                mascota: mascotaEncontrada,
                idUsuarios: req.session.credencialSegura.id,
                idRazas: parametros.idRaza,
                razas: razasEncontradas
              });
            } else {
              return res.view('vistas/Error', {
                error: {
                  descripcion: "La mascota con id: " + parametros.id + " no existe.",
                  rawError: "No existe la mascota",
                  url: "/ListarMascotas?idUsuarios=" + parametros.idUsuario + "idRazas=" + parametros.idRaza
                }
              });
            }
          })
      } else {
        return res.view('vistas/Error', {
          error: {
            descripcion: "No ha enviado el parametro ID",
            rawError: "Faltan Parametros",
            url: "/ListarMascotas?idUsuarios=" + parametros.idUsuario + "idRazas=" + parametros.idRaza
          }
        });
      }
    })
  },
  crearRaza: function (req, res) {
    return res.view('vistas/Raza/crearRaza');
  },
  listarRazas: function (req, res) {
    Raza.find()
      .exec(function (errorIndefinido, razasEncontradas) {
        if (errorIndefinido) {
          res.view('vistas/Error', {
            error: {
              descripcion: "Hubo un problema cargando las razas",
              rawError: errorIndefinido,
              url: "/ListarRazas"
            }
          });
        }
        res.view('vistas/Raza/listarRazas', {
          razas: razasEncontradas
        });
      })
  },
  editarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Raza.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, razaEncontrada) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              descripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarRazas"
            }
          });
        }
        if (razaEncontrada) {
          return res.view("vistas/Raza/editarRaza", {
            raza: razaEncontrada,
            inicioSesion: true
          });
        } else {
          return res.view('vistas/Error', {
            error: {
              descripcion: "La raza con id: " + parametros.id + " no existe.",
              rawError: "No existe la raza",
              url: "/ListarRazas"
            }
          });
        }
      })
    } else {
      return res.view('vistas/Error', {
        error: {
          descripcion: "No ha enviado el parametro ID",
          rawError: "Faltan Parametros",
          url: "/ListarRazas"
        }
      });
    }

  }

};
