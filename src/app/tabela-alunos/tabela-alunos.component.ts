import { Component, OnInit } from '@angular/core';

//      -------------------- tabela-alunos.component.ts --------------------

@Component({
  selector: 'app-tabela-alunos',
  templateUrl: './tabela-alunos.component.html',
  styleUrls: ['./tabela-alunos.component.css']
})
export class TabelaAlunosComponent implements OnInit {

  //Declarando uma variável que é um array de String, contendo os títulos das informações da Tabela.
  dados: string[] = ["NOME", "RU","CURSO", "DATA DE NASCIMENTO"];

  //Declarando variáveis que são arrays de String, contendo os dados dos alunos.
  info_aluno1: string[] = ["Felipe Gabriel da Silva Souza", "3350216",
  "Análise e Desenvolvimento de Sistemas", "23/10/2001"];
  info_aluno2: string[] = ["Pedro da Silva", "2467876",
  "Curso 2", "15/06/1990"];
  info_aluno3: string[] = [" Gabriel Souza", "9058276",
  "Curso 3", "10/11/2003"];
  info_aluno4: string[] = ["Felipe Souza", "3902527",
  "Curso 4", "14/02/2000"];
  info_aluno5: string[] = ["Sofia Alves", "2726667",
  "Curso 5", "24/12/1999"];
  info_aluno6: string[] = ["Lívia Oliveira", "5827319",
  "Curso 6", "20/09/2001"];

  constructor() { }

  ngOnInit(): void {
  }

}
