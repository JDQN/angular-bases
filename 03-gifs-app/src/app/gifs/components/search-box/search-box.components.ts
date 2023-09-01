import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-search-box',
  templateUrl: 'search-box.component.html',
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}


/*
  *NOTAS:
  -----------------------------------------------
  - @ViewChild('txtTagInput'):
     Este decorador hace referencia a la etiqueta #txtTagInput del html
  - public tagInput!: ElementRef<HTMLInputElement>;
     Esto indica que se espera un elemento HTML de tipo Input

  searchTag():
  -  Cuando se llama a esta funcion se ejecutaran las siguientes acciones:

  1. Se obtiene el valor del elemento input que fue capturado utilizando 'tagInput.nativeElement.value' y se almacena en la variable 'newTag'
  2. Luego se llama el metodo 'searTag(newTag)' del servicio 'gifsService' y se le pasa como parametro el valor de la variable 'newTag'
  3. Por ultimo se limpia el valor del elemento input utilizando 'this.tagInput.nativeElement.value = '';
  -----------------------------------------------
*/
