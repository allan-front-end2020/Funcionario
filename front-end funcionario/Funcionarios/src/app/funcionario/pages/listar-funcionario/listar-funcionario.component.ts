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
      saldo:'100.00'

    },

    {
      id:2,
      nome:'Douglas',
      telefone: 'allan@allan.com',
      saldo:'13.000.00'

    },
    {
      id:3,
      nome:'Santos',
      telefone: 'allan@allan.com',
      saldo:'500.00'

    },
     {
      id:4,
      nome:'Tavares',
      telefone: 'allan@allan.com',
      saldo:'10.000.00'

    },
  ]

  colums: string[]=['id', 'nome','telefone', 'saldo']

  constructor() { }

  ngOnInit(): void {
  }

}
