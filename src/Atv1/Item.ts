export class Item {
    constructor(
        public valor: number,
        public nome: string,
        public descricao: string
    ) {}

    getDetalhes(): string {
        return `${this.nome}: ${this.descricao} - R$ ${this.valor.toFixed(2)}`;
    }
}
