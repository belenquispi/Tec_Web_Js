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
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH3 = "red";
  tamano = "52px";
  classes = "btn btn-block btn-success";
  error:string="No hay error";

  nuevaTienda: any = {};
  disabledButtons={
    NuevaTiendaFormSubmitButton:false
  }


  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
    this.apellido = "Quispi";
    this.nombre = "Belen";
    console.log("Inicio el construcor")
  }

  ngOnInit() {
    this.apellido = "Sotamba";
    this.nombre = "Aracely";
    console.log("On Init")
  }

  nombrecompleto(): string {
    return `${this.nombre} y ${this.apellido}`
  }

  hizoclick() {
    console.log("Hizo Click");
    console.log()
  }

  hizofocus() {
    console.log("Hizo focus");
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
          console.log("No hubo Errores")
          console.log(res);
          this.nuevaTienda={};
          this.disabledButtons.NuevaTiendaFormSubmitButton=true;
        },
        (err)=>{
          console.log("Ocurrio un error",err);
          this.disabledButtons.NuevaTiendaFormSubmitButton=true;
        },
        ()=>{
          console.log("Terminamos la función vamos a las casas");
          this.disabledButtons.NuevaTiendaFormSubmitButton=true;
        }
      )

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
}
