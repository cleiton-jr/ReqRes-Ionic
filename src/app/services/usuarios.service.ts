import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resposta } from '../models/Resposta.model';
import { RespostaUserCreate } from '../models/RespostaUserCreate.model';
import { RespostaUserUpdate } from '../models/RespostaUserUpdate.model';
import { User } from '../models/User.model';
import { UserCreateUpdate } from '../models/UserCreateUpdate.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<Resposta> {
    return this.httpClient.get<Resposta>(this.url);
  }

  getUsersByPage(page: number): Observable<Resposta> {
    return this.httpClient.get<Resposta>(`${this.url}?page=${page}`);
  }

  getUserById(id: number): Observable<Resposta> {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  create(user: UserCreateUpdate): Observable<RespostaUserCreate> {
    return this.httpClient.post<RespostaUserCreate>(this.url, user);
  }

  update(user: UserCreateUpdate, id: number): Observable<RespostaUserUpdate> {
    return this.httpClient.put<RespostaUserUpdate>(`${this.url} / ${id}`, user);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
