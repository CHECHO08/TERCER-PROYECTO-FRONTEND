import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LibroResponse } from '../interfaces/libro.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LibroService {

  private http = inject(HttpClient);
  private baseUrl = environment.url;

  private dataUrl = `${this.baseUrl}/lists`;

  // Lista de libros
  librosResource = httpResource<LibroResponse>(() => this.dataUrl, {
    defaultValue: { libros: [], success: true }
  });

  // Libro por ID  <-- ESTA FUNCIÓN ES LA QUE FALTABA
  libroDetalleResource = (id: () => string) =>
    httpResource<LibroResponse>(() => {
      const _id = id();
      return _id ? `${this.dataUrl}/${_id}` : undefined;
    });
}
