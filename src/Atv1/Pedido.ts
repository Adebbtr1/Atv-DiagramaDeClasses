// src/Pedido.ts
import { Item } from "./Item";

export class Pedido {
    public itens: Item[] = [];
    public valorTotal: number = 0;

    adicionarItem(item: Item): void {
        this.itens.push(item);
        this.calcularValorTotal();
    }

    calcularValorTotal(): void {
        this.valorTotal = this.itens.reduce((total, item) => total + item.valor, 0);
    }
}
