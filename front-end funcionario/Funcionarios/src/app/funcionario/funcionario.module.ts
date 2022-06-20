import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { NovoFuncionarioComponent } from './pages/novo-funcionario/novo-funcionario.component';
import { MaterialModule } from '../material.module'
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    NovoFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MaterialModule,
    NgxMaskModule.forChild()
  ]
})
export class FuncionarioModule { }
