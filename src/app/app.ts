import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aluno } from './models/aluno.model';
import { AlunoServiceTs } from './services/aluno.service'
import { AlunoList } from './components/aluno-list'
import { AlunoForm } from './componentes/aluno-form/aluno-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlunoList, AlunoForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  aluno = signal<Aluno>(new Aluno());
  alunos: Aluno[] = [];
  constructor(private alunoService: AlunoServiceTs) { }
  //ngOnInit- método que roda quando o componente é inicializado
  ngOnInit(): void {
    //obter a lista de alunos do serviço
    this.alunos = this.alunoService.obterAlunos()();
  }
  adicionarAluno(): void {
    console.log('Aluno a ser cadastrado:', this.aluno());
  }
}