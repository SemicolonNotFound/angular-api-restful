import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

// Injectable provê que esse Service estará disponível em toda nossa aplicação.
@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembrete(): Observable<Lembrete[]> {
    const url = `${environment.apiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.apiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.apiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.apiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.apiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

}
