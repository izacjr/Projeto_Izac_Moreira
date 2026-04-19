class C {
    private C1: string;
    private C2: number;

    constructor(c1: string, c2: number) {
        this.C1 = c1;
        this.C2 = c2;
    }

    // Gets e Sets
    public getC1(): string { return this.C1; }
    public setC1(valor: string): void { this.C1 = valor; }

    public getC2(): number { return this.C2; }
    public setC2(valor: number): void { this.C2 = valor; }

    // Métodos solicitados
    public MC1(): void {
        console.log("MC1");
    }

    public MC2(): void {
        console.log("MC2");
    }
}