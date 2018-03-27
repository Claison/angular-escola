export class Disciplina {
  codigo:number
  nome: string;
  descricao: string;
  periodo:string;
  tipo:string;
  data:Date;
  ativa:boolean;

  constructor(codigo:number, nome: string, descricao?: string, periodo?:string, tipo?:string, data?:Date,ativa?:boolean) {
    this.codigo=codigo
    this.nome = nome;
    this.descricao = descricao;
    this.periodo=periodo;
    this.data=data;
    this.tipo=tipo;
    this.ativa=ativa;
  }
}
