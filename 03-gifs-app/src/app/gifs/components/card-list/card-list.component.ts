import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: 'card-list.component.html'
})

export class CardListComponent {

  constructor() { }

  // Propiedad decorada con @Input() para recibir datos desde el componente padre.
  @Input()
  public gifs: Gif[] = []; // Aquí almacenaremos la lista de gifs que se pasará al componente.

}


/*
  NOTAS:

  - @Input():
    - Este decorador permite que la propiedad (gifs) sea pasada como entrada desde el componente padre.

  public gifs: Gif[] = [];
    - Esta propiedad almacenara la lista de (gifs) que se mostraraen el componente.


*/
