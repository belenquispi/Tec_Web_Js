import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Bienvenidos a Ingresar Tiendas";
  nuevaTienda: any = {};
  tiendas = [];
  disabledButtons={
    NuevaTiendaFormSubmitButton:false
  };
  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
  }
  ngOnInit() {
    this._http.get(this._masterURL.url+"Tienda")
      .subscribe(
        (res:Response)=>{
          console.log(res.json());
          this.tiendas=res.json().map((value)=>{
            value.formularioCerrado=true;
            return value;
          });
        },
        (err)=>{
          console.log(err)
        }
      )
  }
  crearTienda(formulario:NgForm) {
    this.disabledButtons.NuevaTiendaFormSubmitButton=true;
    console.log(formulario);

    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    })
      // .subscribe(respuesta => console.log("respuesta", respuesta));
      .subscribe(
        (res)=>{
          console.log("No hubo Errores");
          console.log(res);
          this.tiendas.push(res.json());
          this.nuevaTienda={};
          this.disabledButtons.NuevaTiendaFormSubmitButton=false;
        },
        (err)=>{
          this.disabledButtons.NuevaTiendaFormSubmitButton=false;
          console.log("Ocurrio un error",err);
        },
        ()=>{
          console.log("Termino la función vamos a las casas");
        }
      );

    //
    // .post("http://localhost:1337/Tienda", formulario.valores)
    // .subscribe(
    //   res=>console.log('Respuesta: ',res),
    //   err=>console.log('Error: ',err),
    //   ()=>{
    //     console.log("Se completo la accion")
    //   }
    // );
  }
  borrartienda(id:number){
       this._http.delete(this._masterURL.url+"Tienda/" +id)
      .subscribe(
        (res)=>{
          let tiendaBorrada=res.json();
          this.tiendas=this.tiendas.filter(value=>tiendaBorrada.id!=value.id)
        },
        (err)=>{
          console.log(err);
        }
      )
  }
  actualizartienda(tienda:any){
    let parametros = {
      nombre:tienda.nombre
    };
    this._http.put(this._masterURL.url+"Tienda/"+tienda.id,parametros)
      .subscribe(
        (res)=>{
          tienda.formularioCerrado=!tienda.formularioCerrado;
          console.log("Respuesta", res.json());
        },
        (err)=>{
          console.log("Error"+err);
        }
      )
  }
}
