import { Component,Input } from '@angular/core';
import { Aluno } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno-list',
  imports: [],
  templateUrl: './aluno-list.html',
  styleUrl: './aluno-list.scss'
})
export class AlunoList {
  @Input() alunos: Aluno[] = [];
  trackById(index: number, aluno: Aluno): number {
    return aluno.id;
  }

}
