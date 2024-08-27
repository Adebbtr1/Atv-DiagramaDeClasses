import { Usuario } from "./Usuario";
import { Livro } from "./Livro";

export class Emprestimo {
    private livro: Livro;
    private usuario: Usuario;
    private dataEmprestimo: Date;
  
    constructor(livro: Livro, usuario: Usuario, dataEmprestimo: Date) {
      this.livro = livro;
      this.usuario = usuario;
      this.dataEmprestimo = dataEmprestimo;
    }
  
    public getLivro(): Livro {
      return this.livro;
    }
  
    public getUsuario(): Usuario {
      return this.usuario;
    }
  
    public getDataEmprestimo(): Date {
      return this.dataEmprestimo;
    }
  }
  
  