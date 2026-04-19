class D {
    private D1: string;
    private D2: number;

    constructor(d1: string, d2: number) {
        this.D1 = d1;
        this.D2 = d2;
    }


    public getD1(): string { return this.D1; }
    public setD1(valor: string): void { this.D1 = valor; }

    public getD2(): number { return this.D2; }
    public setD2(valor: number): void { this.D2 = valor; }

    public MD1(): void {
        console.log("Executando método MD1 da Classe D");
    }

    public MD2(): void {
        console.log("Executando método MD2 da Classe D");
    }
}