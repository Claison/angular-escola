import {Professor} from './professor.model';
export class Disciplina {
  codigo:number
  nome: string;
  descricao: string;
  professor:Professor

  constructor(codigo:number, nome: string, descricao?: string, professor?:Professor) {
    this.codigo=codigo
    this.nome = nome;
    this.descricao = descricao;
    this.professor=professor
  }
}
