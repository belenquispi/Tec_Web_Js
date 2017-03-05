/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.idUsuarios != undefined) {
      if (parametros) {
        var mascotaNueva = {
          nombre: parametros.nombre,
          fechaNacimiento: parametros.fechaNacimiento,
          paisNacimiento: parametros.paisNacimiento,
          idRaza: parametros.idRaza,
          idUsuario: req.session.credencialSegura.id
        };
        Mascota.create(mascotaNueva).exec(function (errorEncontrado, nuevaMascota) {
          if (errorEncontrado) {
            return res.view('vistas/Error', {
              error: {
                descripcion: "Se ha producido un problema al crear el regitro de la mascota",
                rawError: errorEncontrado,
                url: "/ListarMascotas?idUsuarios=" + parametros.idUsuarios + "&idRazas=undefined"
              }
            });
          }
          Mascota.find({
            where: {
              idUsuario: parametros.idUsuarios
            }
          }).exec(function (errorInesperado, mascotasEncontradas) {
            if (errorInesperado) {
              return res.view('vistas/Error', {
                error: {
                  descripcion: "Se ha producido un problema al cargar el regitro de las mascotas",
                  rawError: errorInesperador,
                  url: "/ListarMascotas?idUsuarios=" + parametros.idUsuarios + "&idRazas=undefined"
                }
              });
            }
            res.view('vistas/Mascota/listarMascotas', {
                mascotas: mascotasEncontradas,
                idUsuarios: parametros.idUsuarios,
                idRazas: undefined
              }
            )
          })
        })
      } else {
        return res.view('vistas/Error', {
          error: {
            descripcion: "No ha enviado todos los parametros requeridos",
            rawError: "Faltan parámetros",
            url: "/ListarMascotas?idUsuarios=" + parametros.idUsuarios + "&idRazas=undefined"
          }
        });
      }
    } else {
      if (parametros.idRazas != undefined) {
        if (parametros) {
          var mascotaNueva = {
            nombre: parametros.nombre,
            fechaNacimiento: parametros.fechaNacimiento,
            paisNacimiento: parametros.paisNacimiento,
            idRaza: parametros.idRaza,
            idUsuario: req.session.credencialSegura.id
          };
          Mascota.create(mascotaNueva).exec(function (errorEncontrado, nuevaMascota) {
            if (errorEncontrado) {
              return res.view('vistas/Error', {
                error: {
                  descripcion: "Se ha producido un problema al crear el regitro de la mascota",
                  rawError: errorEncontrado,
                  url: "/ListarMascotas?idUsuarios=undefined&idRazas=" + parametros.idRazas
                }
              });
            }
            Mascota.find({
              where: {
                idRaza: parametros.idRazas
              }
            }).exec(function (errorInesperado, mascotasEncontradas) {
              if (errorInesperado) {
                return res.view('vistas/Error', {
                  error: {
                    descripcion: "Se ha producido un problema al cargar el regitro de las mascotas",
                    rawError: errorInesperador,
                    url: "/ListarMascotas?idUsuarios=undefined&idRazas=" + parametros.idRazas
                  }
                });
              }
              res.view('vistas/Mascota/listarMascotas', {
                  mascotas: mascotasEncontradas,
                  idUsuarios: undefined,
                  idRazas: parametros.idRazas
                }
              )
            })
          })
        } else {
          return res.view('vistas/Error', {
            error: {
              descripcion: "No ha enviado todos los parametros requeridos",
              rawError: "Faltan parámetros",
              url: "/ListarMascotas?idUsuarios=undefined&idRazas=undefined"
            }
          });
        }
      } else {
        if (parametros) {

          var mascotaNueva = {
            nombre: parametros.nombre,
            fechaNacimiento: parametros.fechaNacimiento,
            paisNacimiento: parametros.paisNacimiento,
            idRaza: parametros.idRaza,
            idUsuario: req.session.credencialSegura.id
          };
          Mascota.create(mascotaNueva).exec(function (errorEncontrado, nuevaMascota) {
            if (errorEncontrado) {
              return res.view('vistas/Error', {
                error: {
                  descripcion: "Se ha producido un problema al crear el regitro de la mascota",
                  rawError: errorEncontrado,
                  url: "/ListarMascotas?idUsuarios=undefined&idRazas=undefined"
                }
              });
            }
            Mascota.find().exec(function (errorInesperado, mascotasEncontradas) {
              if (errorInesperado) {
                return res.view('vistas/Error', {
                  error: {
                    descripcion: "Se ha producido un problema al cargar el regitro de las mascotas",
                    rawError: errorInesperador,
                    url: "/ListarMascotas?idUsuarios=undefined&idRazas=undefined"
                  }
                });
              }
              res.view('vistas/Mascota/listarMascotas', {
                  mascotas: mascotasEncontradas,
                  idUsuarios: undefined,
                  idRazas: undefined
                }
              )
            })
          })
        } else {
          return res.view('vistas/Error', {
            error: {
              descripcion: "No ha enviado todos los parametros requeridos",
              rawError: "Faltan parámetros",
              url: "/ListarMascotas?idUsuarios=undefined&idRazas=undefined"
            }
          });
        }
      }
    }

  },
  borrarMascota: function (req, res) {
    var parametros = req.allParams();
    console.log("Usuario"+parametros.idUsuario);
    console.log("Raza"+parametros.idRaza);
    if (parametros.id) {
      if (parametros.idUsuario != undefined) {
        Mascota.destroy({
          id: parametros.id
        }).exec(function (errorInesperado, mascotaRemovido) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Tuvimos un Error Inesperado",
                rawError: errorInesperado,
                url: "/ListarMascotas?idUsuarios=" + parametros.idUsuario + "&idRazas=undefined"
              }
            });
          }
          Mascota.find({
            where: {
              idUsuario: parametros.idUsuario
            }
          }).populate("idRaza")
            .exec(function (errorIndefinido, mascotasEncontradas) {
              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando las razas",
                    rawError: errorIndefinido,
                    url: "/ListarMascotas?idUsuarios=" + parametros.idUsuario + "&idRazas=undefined"
                  }
                });
              }
              res.view('vistas/Mascota/listarMascotas', {
                mascotas: mascotasEncontradas,
                idUsuarios: parametros.idUsuario,
                idRazas: undefined
              });
            })
        })
      }
      else {
        if (parametros.idRaza != undefined) {
          Mascota.destroy({
            id: parametros.id
          }).exec(function (errorInesperado, mascotaRemovido) {
            if (errorInesperado) {
              return res.view('vistas/Error', {
                error: {
                  desripcion: "Tuvimos un Error Inesperado",
                  rawError: errorInesperado,
                  url: "/ListarMascotas?idUsuarios=undefined&idRazas=" + parametros.idRaza
                }
              });
            }
            Mascota.find({
              where: {
                idRaza: parametros.idRaza
              }
            }).populate("idRaza")
              .exec(function (errorIndefinido, mascotasEncontradas) {
                if (errorIndefinido) {
                  res.view('vistas/Error', {
                    error: {
                      desripcion: "Hubo un problema cargando las mascotas",
                      rawError: errorIndefinido,
                      url: "/ListarMascotas?idUsuarios=undefined&idRazas=" + parametros.idRaza
                    }
                  });
                }
                res.view('vistas/Mascota/listarMascotas', {
                  mascotas: mascotasEncontradas,
                  idUsuarios: undefined,
                  idRazas: parametros.idRaza
                });
              })
          })
        } else {
          Mascota.destroy({
            id: parametros.id
          }).exec(function (errorInesperado, mascotaRemovido) {
            if (errorInesperado) {
              return res.view('vistas/Error', {
                error: {
                  desripcion: "Tuvimos un Error Inesperado",
                  rawError: errorInesperado,
                  url: "/ListarMascotas?idUsuarios=undefined&idRazas=undefined"
                }
              });
            }
            Mascota.find().populate("idRaza")
              .exec(function (errorIndefinido, mascotasEncontradas) {
                if (errorIndefinido) {
                  res.view('vistas/Error', {
                    error: {
                      desripcion: "Hubo un problema cargando las razas",
                      rawError: errorIndefinido,
                      url: "/ListarMascotas?idUsuarios=undefined&idRazas=undefined"
                    }
                  });
                }
                res.view('vistas/Mascota/listarMascotas', {
                  mascotas: mascotasEncontradas,
                  idUsuarios: undefined,
                  idRazas: undefined
                });
              })
          })
        }
      }
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar la mascota",
          rawError: "No envia ID",
          url: "/ListarMascotas"
        }
      });
    }
  },
  editarMascota: function (req,res) {
    var parametros= req.allParams();
    if (parametros.id &&(parametros.nombre || parametros.fechaNacimiento || parametros.paisNacimiento || parametros.idRaza)) {
      var mascotaAEditar = {
        nombre: parametros.nombre,
        fechaNacimiento: parametros.fechaNacimiento,
        paisNacimiento: parametros.paisNacimiento,
        idRaza: parametros.idRaza,
        idUsuario:idUsuarios
      };
      if (mascotaAEditar.nombre == "") {
        delete mascotaAEditar.nombre
      }
      Mascota.update({
        id: parametros.id
      }, mascotaAEditar)
        .exec(function (errorInesperado, mascotaRemovida) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Tuvimos un Error Inesperado",
                rawError: errorInesperado,
                url: "/ListarMascotas?"
              }
            });
          }
          Mascota.find()
            .exec(function (errorIndefinido, mascotasEncontradas) {
              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando las mascotas",
                    rawError: errorIndefinido,
                    url: "/ListarMascotas?"
                  }
                });
              }
              res.view('vistas/Mascota/ListarMascotas', {
                mascotas: mascotasEncontradas,
                idUsuarios:parametros.idUsuarios,
                idRazas:parametros.idRazas
              });
            })
        })
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos que envies la nueva información de tu mascota",
          rawError: "No envia Parametros",
          url: "/ListarMascotas?"
        }
      });
   }
  }
};

