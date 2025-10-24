import { Component, VERSION } from '@angular/core';
import { PokeapiService } from './service/pokeapi.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  searchTerm: string = '';
  pokemon: any = null;
  error: string = '';

  constructor(private pokeapiService: PokeapiService) {}

  buscarPokemon() {
    this.error = '';
    this.pokemon = null;

    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      this.error = 'Por favor ingresa un nombre o ID.';
      return;
    }

    this.pokeapiService.obtenerPorNombre(term).subscribe({
      next: (data) => {
        this.pokemon = data;
        console.log('Pokemon encontrado:', data);
      },
      error: () => {
        this.error = 'No se encontró el Pokémon.';
      },
    });
  }
}
