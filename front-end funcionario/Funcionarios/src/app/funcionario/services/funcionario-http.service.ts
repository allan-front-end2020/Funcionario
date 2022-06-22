import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class FuncionarioHttpService {
  
  private readonly baseURL ='http://localhost:8082/servicos/funcionario'



  constructor(
    private http: HttpClient
  ) { }
}
