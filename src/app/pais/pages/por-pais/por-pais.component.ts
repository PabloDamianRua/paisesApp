import { Component } from '@angular/core';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { Country } from 'src/app/interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = 'Hola mundo';
  hayError: boolean = false;
  _paises: Country[] =[];

  get getPaises():Country[]
  {
    return this._paises;
  }

  constructor(private PaisService: PaisService) { }

  buscar(termino: string)
  {
    this.termino = termino;
    this.hayError = false;
    
    console.log(this.termino);
    
    this.PaisService.buscarPais(this.termino)
    .subscribe(paises=>{
      console.log(paises);
      this._paises = paises;
    },(err)=>{
      this.hayError = true;
      this._paises=[];
      
    })
  } 

}
