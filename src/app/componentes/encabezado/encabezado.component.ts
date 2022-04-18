import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  datosPortfolio:any;

  constructor(private datos: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(datos => {
      this.datosPortfolio=datos;
    });


  }
}
