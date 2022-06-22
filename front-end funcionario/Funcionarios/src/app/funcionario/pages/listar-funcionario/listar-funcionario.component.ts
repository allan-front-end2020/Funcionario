import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {


  funcionarios=[
    {
      id:1,
      nome:'Allan',
      telefone: 'allan@allan.com',
      saldo:'R$:100.00'

    },

    {
      id:2,
      nome:'Douglas',
      telefone: 'allan@allan.com',
      saldo:'R$:13.000.00'

    },
    {
      id:3,
      nome:'Santos',
      telefone: 'allan@allan.com',
      saldo:'R$:500.00'

    },
     {
      id:4,
      nome:'Tavares',
      telefone: 'allan@allan.com',
      saldo:' R$:10.000.00'

    },
  ]

  columns: string[]=['id', 'nome','telefone', 'saldo']

  constructor() { }

  ngOnInit(): void {
  }

}
