import { Aluno} from "../models/aluno.model";

export const ALUNOS_MOCK: Aluno[] = [
    new Aluno(1, 'Ana Costa', 'f', 'https://randomuser.me/api/portraits/women/2.jpg', 'Angular', 9, 8.5),
    new Aluno(2, 'Carlos Santos', 'm', 'https://randomuser.me/api/portraits/men/1.jpg', 'Angular', 6, 7),
    new Aluno(3, 'Mariana Oliveira', 'f', 'https://randomuser.me/api/portraits/women/3.jpg', 'Angular', 5, 6),
    new Aluno(4, 'João Silva', 'm', 'https://randomuser.me/api/portraits/men/2.jpg', 'Angular', 10, 9.5)
];


ALUNOS_MOCK.forEach(aluno => aluno.processarNotas)
