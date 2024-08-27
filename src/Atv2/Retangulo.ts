import { FormatoDeElemento } from "./FormatoDeElementos";

export class Retangulo extends FormatoDeElemento {
    constructor(public comprimento: number, public altura: number) {
        super();
    }

    desenhar(): void {
        console.log(`Desenhando um retângulo com comprimento ${this.comprimento} e altura ${this.altura}`);
    }

    redimensionar(): void {
        console.log(`Redimensionando o retângulo para comprimento ${this.comprimento} e altura ${this.altura}`);
    }
}
