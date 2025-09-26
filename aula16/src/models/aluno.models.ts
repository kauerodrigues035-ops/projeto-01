export class Aluno {
    constructor(
        public id: number = 0,
        public nome: string = '',
        public sexo: string = '',
        public foto: string = '',
        public disciplina: string = '',
        public nota1: number = 0,
        public nota2: number = 0,
        public media: number = 0,
        public situacao: string = ''
    ) { }
    calcularMedia(): void {
        this.media = (this.nota1 + this.nota2) / 2;
    }
    definirSituacao(): void {
        this.situacao = this.media >= 7 ? 'Aprovado' : 'Reprovado';
    }

    processarNotas(): void {
        this.calcularMedia();
        this.definirSituacao();
    }




}// fecha a classe aluno