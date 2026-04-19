class A {
    private A1: number;
    private A2: number;

    constructor(a1: number, a2: number) {
        this.A1 = a1;
        this.A2 = a2;
    }

    
    public getA1(): number { return this.A1; }
    public setA1(valor: number): void { this.A1 = valor; }
    public getA2(): number { return this.A2; }
    public setA2(valor: number): void { this.A2 = valor; }

    public MA1(): void { console.log("MA1"); }
    public MA2(): void { console.log("MA2"); }

    
    public MA3(): void {
        console.log("Alteração a classe A partir do clone");
    }
}