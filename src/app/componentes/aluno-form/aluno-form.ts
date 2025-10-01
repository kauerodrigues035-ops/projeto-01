import { Component,output,model } from '@angular/core';
import { Aluno } from '../../models/aluno.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.scss'
})
export class AlunoForm {
  aluno = model.required<Aluno>();
  onSubmit = output<void>();

  cadastrarAluno(): void {
    this.onSubmit.emit();
  }
};