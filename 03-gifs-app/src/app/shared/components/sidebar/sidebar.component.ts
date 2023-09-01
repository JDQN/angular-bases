import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}


/*
  NOTAS:

  get tags():
    - Esta propiedad getter tags debuelve el historial de etiquetas (tags) del servicio gifsService.

  searchTag(tag: string):
    - Este metodo sirve para realizar una busqueda utilizando el servicio gifsService.
    - y toma la etiqueta (tag) como parametro y llama al metodo searchTag del servicio gifsService.

 */
