import { Injectable, signal } from '@angular/core';
import { Aluno } from '../../models/aluno.model';
import { ALUNOS_MOCK } from '../shared/mock.aluno.data';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceTs {
  //signal()- recurso moderno do angular para estado reativo
  private alunosSignal = signal<Aluno[]>(ALUNOS_MOCK);
  
  obterAlunos() {
    return this.alunosSignal.asReadonly(); // Só Leitura
  }


}