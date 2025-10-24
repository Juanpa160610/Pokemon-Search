import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../modelos/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?limit=50`);
  }

  obtenerPorNombre(nombre: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${nombre}`);
  }
}
