import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-pages',
  templateUrl: './home-pages.component.html',
})
export class HomePagesComponent {

  constructor(private gifsServices: GifsService) { }

  get gifs(): Gif[] {
    return this.gifsServices.gifList;
  }

}


/*
   NOTA:

    get gifs(): Gif[]:
    El get es una propiedad que devuelve la lista ge gifs del servicio (gifsServices).

 */
