import { FormatoDeElemento } from "./FormatoDeElementos";

export class Circulo extends FormatoDeElemento {
    constructor(public raio: number) {
        super();
    }

    desenhar(): void {
        console.log(`Desenhando um círculo com raio ${this.raio}`);
    }

    redimensionar(): void {
        console.log(`Redimensionando o círculo para raio ${this.raio}`);
    }
}
