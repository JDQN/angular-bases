import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';
import { first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //En la proiedad gifList se almacenan los gifs que se muestran en pantalla
  public gifList: Gif[] = [];

  //El _tagsHistory es un arreglo que almacena las busquedas que se han realizado
  private _tagsHistory: string[] = [];

  //El apiKey es donde se almacena la llave de la api.
  private apiKey: string = 'IegWGXBubLIsKzwUVgSLjBnF0VYNa2s7'

  //El serviceurl es la url de la api
  private serviceurl: string = 'https://api.giphy.com/v1/gifs'

  //El constructor recibe como parametro el modulo HttpClient
  constructor(private http: HttpClient) {
    //Se llama al metodo loadLocalStorage para cargar el historial de busquedas
    this.loadLocalStorage();
  }


  //El metodo tagsHistory es un getter que retorna una copia del arreglo _tagsHistory
  get tagsHistory() {
    //Los ... son el operador spread, este operador lo que hace es que crea una copia del arreglo
    return [...this._tagsHistory];
  }


  //El metodo organizeHistory recibe como parametro un string que es el tag que se va a buscar
  private organizeHistory(tag: string) {
    // Paso 1: Convertir la etiqueta a minúsculas
    tag = tag.toLowerCase();

    // Paso 2: Verificar si la etiqueta ya existe en el historial
    if (this._tagsHistory.includes(tag)) {
      // Si existe, filtramos la etiqueta duplicada y la eliminamos
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    // Paso 3: Agregar la etiqueta al principio del historial
    this._tagsHistory.unshift(tag);

    // Paso 4: Mantener un máximo de 10 etiquetas en el historial
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }


  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }


  private loadLocalStorage(): void {

    // Paso 1: Verificar si hay un historial almacenado en el almacenamiento local
    if (!localStorage.getItem('history')) return;

    // Paso 2: Si hay un historial almacenado, obtiene y parsea el JSON del historial
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    // Paso 3: Verificar si el historial parseado contiene etiquetas
    if (this._tagsHistory.length === 0) return;

    // Paso 4: Si el historial contiene etiquetas, realiza una búsqueda con la primera etiqueta del historial
    this.searchTag(this._tagsHistory[0]);

  }


  searchTag(tag: string): void {
    // Paso 1: Verificar si la longitud de la etiqueta es cero (está vacía)
    if (tag.length === 0) return;

    // Paso 2: Organizar la etiqueta en el historial de búsqueda
    this.organizeHistory(tag);

    // Paso 3: Configurar los parámetros de búsqueda para la solicitud a la API de Giphy
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    // Paso 4: Realizar una solicitud HTTP GET a la API de Giphy utilizando HttpClient
    this.http.get<SearchResponse>(`${this.serviceurl}/search`, { params })
      .subscribe(res => {
        // Paso 5: Actualizar la propiedad gifList con los GIFs obtenidos
        this.gifList = res.data;

        // Mostrar los resultados en la consola
        console.log({ gifs: this.gifList });
      });
  }

}




/*
  - Método private organizeHistory():
     Este método se encarga de organizar el historial de etiquetas.
     Pasos:
      1. Convierte la etiqueta a minúsculas.
      2. Verifica si la etiqueta ya existe en el historial. Si existe, elimina duplicados.
      3. Agrega la etiqueta al principio del historial.
      4. Asegura que el historial tenga un máximo de 10 elementos.


  - Método private saveLocalStorage():
    Este metodo guarda el historial de etiquetas en el almacenamiento del localStorage.
    Pasos:
      1. Convierte el historial de etiquetas a un JSON.
      2. Almacena el historial JSON en el almacenamiento del localStorage.


  - Método private loadLocalStorage():
    Este metodo carga el historial de etiquetas almacenado previmente en el localStorage.
    Pasos:
      1. Verifica si hay un historial en el localStorage y si no hay un historialfinaliza la ejecución del método.
      2. Si hay un historial almacenado, obtiene y parsea el JSON del historial
      3. Verificar si el historial parseado contiene etiquetas
      4. Si el historial contiene etiquetas, realiza una búsqueda con la primera etiqueta del historial


  - Método searchTag(tag: string):
    Realiza una busqueda dee gifs en la API
    Pasos:
    1. Verifica si la longitud de la etiqueta es cero (esta vacia). si es asi finaliza la ejecicion del metodo.
    2. Organiza la etiqueta en el historial de busquedas.
    3. Configura los parametros de busqueda para la solicitud de la API.
      - Se establce la llave de la API
      - Se establece el limite de resultados a 10
      - Se establece la etiqueta a buscar
    4. Se realiza la solicitud HTTP GET a la API utilizando el metodo get del modulo HttpClient.
    5. Despues de recibir la respuesta, actualiza la prioridad (gifList) con los gifs obtenidos en la respuesta.

 */
