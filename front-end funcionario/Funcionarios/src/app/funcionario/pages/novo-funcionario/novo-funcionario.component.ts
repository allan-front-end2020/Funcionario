import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {

 funcionario : FormGroup = this.fb.group({
   nome: ['',[Validators.required]],
   email: ['', [Validators.required]],
   telefone: ['',[Validators.required]],
   senha: ['',[Validators.required]],
   confirmeSenha: ['', [Validators.required]],

 })

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
