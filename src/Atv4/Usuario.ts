export class Usuario {
    private id: number;
    private nome: string;
  
    constructor(id: number, nome: string) {
      this.id = id;
      this.nome = nome;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getNome(): string {
      return this.nome;
    }
  }