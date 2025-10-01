import { Injectable, signal } from '@angular/core';
import { Aluno } from '../models/aluno.model';
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
 private gerarProximoId(): number {
    const alunos = this.alunosSignal();
    if (alunos.length === 0) return 1;
    return Math.max(...alunos.map(a => a.id)) + 1;
  }

  adicionarAluno(novoAluno: Aluno): void {
    const alunoComId = new Aluno(
      this.gerarProximoId(),    // ID automático
      novoAluno.nome,
      novoAluno.sexo,
      novoAluno.foto,
      novoAluno.disciplina,
      novoAluno.nota1,
      novoAluno.nota2
    );
    
    alunoComId.processarNotas();
    this.alunosSignal.update(alunos => [...alunos, alunoComId]);
  }

}