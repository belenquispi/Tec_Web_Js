/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearRaza: function (req, res) {
    if (req.method == "POST") {
      var parametros = req.allParams();
      if (parametros.nombre != "") {
        var razaCrear = {
          nombre: parametros.nombreRaza,
          caracteristica: parametros.caracteristica,
          regionOrigen: parametros.regionOrigen
        };
        Raza.create(razaCrear).exec(function (err, razaCreado) {
          if (err) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Fallo al crear la Raza",
                rawError: err,
                url: "/CrearRaza"
              }
            });
          }
          Raza.find()
            .exec(function (errorIndefinido, razasEncontradas) {
              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando las Razas Regitradas",
                    rawError: errorIndefinido,
                    url: "/ListarRazas"
                  }
                });
              }
              res.view('vistas/Raza/listarRazas', {
                razas: razasEncontradas
              });
            })
        })
      } else {
        return res.view('vistas/Error', {
          error: {
            desripcion: "Llenar todos los parametros",
            rawError: "Fallo en envio de parametros",
            url: "/CrearRaza"
          }
        });
      }
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Error en el uso del Metodo HTTP",
          rawError: "HTTP Invalido",
          url: "/CrearRaza"
        }
      });
    }

  },
  borrarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Raza.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, RazaRemovido) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarRazas"
            }
          });
        }
        Raza.find()
          .exec(function (errorIndefinido, razasEncontradas) {
            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  desripcion: "Hubo un problema cargando las razas",
                  rawError: errorIndefinido,
                  url: "/ListarRazas"
                }
              });
            }
            res.view('vistas/Raza/listarRazas', {
              razas: razasEncontradas
            });
          })
      })
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar la raza",
          rawError: "No envia ID",
          url: "/ListarRazas"
        }
      });
    }
  },
  editarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id && (parametros.nombre || parametros.caracteristica || parametros.regionOrigen)) {
      var razaAEditar = {
        nombre: parametros.nombre,
        caracteristica: parametros.caracteristica,
        paisOrigen: parametros.paisOrigen
      };
      if (razaAEditar.nombre == "") {
        delete razaAEditar.nombre
      }
      if (razaAEditar.caracteristica == "") {
        delete razaAEditar.caracteristica
      }
      if (razaAEditar.paisOrigen == "") {
        delete razaAEditar.paisOrigen
      }
      Raza.update({
        id: parametros.id
      }, razaAEditar)
        .exec(function (errorInesperado, razaRemovido) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Tuvimos un Error Inesperado",
                rawError: errorInesperado,
                url: "/ListarRazas"
              }
            });
          }
          Raza.find()
            .exec(function (errorIndefinido, razasEncontradas) {
              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando las razas",
                    rawError: errorIndefinido,
                    url: "/ListarRazas"
                  }
                });
              }
              res.view('vistas/Raza/ListarRazas', {
                razas: razasEncontradas
              });
            })
        })
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos que envies el ID y el nombre, caracteristica o pais de origen",
          rawError: "No envia Parametros",
          url: "/ListarRazas"
        }
      });
    }
  }
};

