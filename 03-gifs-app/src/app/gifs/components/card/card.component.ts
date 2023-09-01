import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})

export class GifsCardComponent implements OnInit {

  constructor() { }

  //@Input() es un decorador para recibir datos desde el componente padre.
  @Input()
  public gif!: Gif; // Aquí almacenaremos la lista de gifs que se pasará al componente.


  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('El componente GifsCardComponent requiere un Gif');
    }
  }

}
