export class Livro {
    private id: number;
    private titulo: string;
    private autor: string;
    private disponivel: boolean;
  
    constructor(id: number, titulo: string, autor: string) {
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getTitulo(): string {
      return this.titulo;
    }
  
    public getAutor(): string {
      return this.autor;
    }
  
    public isDisponivel(): boolean {
      return this.disponivel;
    }
  
    public emprestar(): void {
      if (!this.disponivel) {
        throw new Error("O livro já está emprestado.");
      }
      this.disponivel = false;
    }
  
    public devolver(): void {
      this.disponivel = true;
    }
  }