import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';   // ⭐ IMPORTANTE
import { LibroService } from '../../services/libro';

@Component({
  selector: 'app-lista',
  imports: [CommonModule],    // ⭐ AGREGA ESTO
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  libroService = inject(LibroService);

  libros = computed(() => {
    const response = this.libroService.librosResource.value();
    return response?.libros ?? [];
  });

}



