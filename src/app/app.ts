import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { AlunoServiceTs } from './serices/aluno.service.ts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  alunos: Aluno [] =[];
 constructor(private alunoService: AlunoServiceTs){}
ngOnInit(){

this.alunos = this.alunoService.obterAlunos()();

}
  
 



}
