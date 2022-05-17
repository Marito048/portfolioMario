import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; //importa el servicio de modal
import { educacionService } from 'src/app/portfolio/servicios/apirest/educacion.service';
import { LoginService } from 'src/app/portfolio/servicios/apirest/login.service';
import { Educacion } from 'src/app/portfolio/servicios/interface/Educacion';
import { EducacionModalComponent } from '../modales/educacion-modal/educacion-modal.component'; //importa el componente para usarlo como modal

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit { 

  //inyecta el servicio de modal
  constructor(private modalService: NgbModal, private EducacionService:educacionService, private loginService:LoginService) {}
  
  educacion!: Educacion [] ;

  getById(id: number) {
    this.EducacionService.getById(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  getAll() {
    this.EducacionService.getAll().subscribe (
			data => { this.educacion = data; }
		);
  }
  delete(id: number) {
    this.EducacionService.delete(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  save(educacion:any) {
    this.EducacionService.save(educacion).subscribe (
			data => { this.educacion = data; }
		);
  }

  update(id: number, educacion: any) {
    this.EducacionService.update(id,educacion).subscribe (
			data => { this.educacion = data; }
		);
  }


  ngOnInit(): void {this.getAll()}
  Educacion: any[] = [
    {
      id_educion: 1,
      institucion_educacion: 'Full Stack Developer',
      logo_educacion:"",
      ingreso_Educacion:"2020",
      egreso_Educacion:"2020",
      titulo_educacion:"Full Stack Developer",
      detalles_educacion:"Full Stack Developer",
      persona_id_persona: 1,

          },
    {
      id_educion: 2,
      institucion_educacion: 'Casi Full Stack Developer',
      logo_educacion:"",
      ingreso_Educacion:"2022",
      egreso_Educacion:"2022",
      titulo_educacion:"Casi Full  Developer",
      detalles_educacion:"Casi  Stack Developer",
      persona_id_persona: 1,
    },
  ];

  abrirModal(id:any){
    //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal
  }
  isLoggedIn(): boolean {

    return this.loginService.isLoggedIn();  
  }
}




// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-educacion',
//   templateUrl: './educacion.component.html',
//   styleUrls: ['./educacion.component.css']
// })
// export class EducacionComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
