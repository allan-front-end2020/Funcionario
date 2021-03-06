import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';
import { MaterialModule } from '../material.module'
import { NgxMaskModule } from 'ngx-mask';
import { ListarFuncionarioComponent } from './pages/listar-funcionario/listar-funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioHttpService } from './services/funcionario-http.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NovoFuncionarioComponent,
    ListarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MaterialModule,
    NgxMaskModule.forChild(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    FuncionarioHttpService

  ]
})
export class FuncionarioModule { }
