import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable()

export class FuncionarioHttpService {
  
  private readonly baseURL ='http://localhost:8083/servicos/funcionario'



  constructor(
    private http: HttpClient
  ) { }

  public getFuncionario(): Observable<Funcionario[]>{
     return this.http.get<Funcionario[]>(this.baseURL)
  }
  
}
