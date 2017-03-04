/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearMascota: function (req, res) {
    var parametros = req.allParams();
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
              url: "/ListarMascotas"
            }
          });
        }

        Mascota.find().exec(function (errorInesperado, mascotasEncontradas) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                descripcion: "Se ha producido un problema al cargar el regitro de las mascotas",
                rawError: errorInesperador,
                url: "/ListarMascotas"
              }
            });
          }
          res.view('vistas/Mascota/listarMascotas', {
              mascotas: mascotasEncontradas
            }
          )
        })
      })
    } else {
      return res.view('vistas/Error', {
        error: {
          descripcion: "No ha enviado todos los parametros requeridos",
          rawError: "Faltan parámetros",
          url: "/ListarMascotas"
        }
      });
    }
  },
  borrarMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id!=undefined & parametros.idUsuario!=undefined) {
      Mascota.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, MascotaRemovido) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarMascotas"
            }
          });
        }
        Mascota.find({
          where:{
            idUsuario:parametros.idUsuario
          }
          }).populate("idRaza")
          .exec(function (errorIndefinido, MascotasEncontradas) {
            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  desripcion: "Hubo un problema cargando las razas",
                  rawError: errorIndefinido,
                  url: "/ListarMascotas"
                }
              });
            }
            res.view('vistas/Mascota/listarMascotas', {
              mascotas: mascotasEncontradas,
              idUsuarios:parametros.idUsuario,
              idRazas:undefined
            });
          })
      })
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar la raza",
          rawError: "No envia ID",
          url: "/ListarRaza"
        }
      });
    }
  }
};

