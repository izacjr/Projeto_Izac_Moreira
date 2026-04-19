class B {
    private B1: number;
    private B2: number;

    constructor(b1: number, b2: number) {
        this.B1 = b1;
        this.B2 = b2;
    }

  
    public getB1(): number { return this.B1; }
    public setB1(valor: number): void { this.B1 = valor; }
    public getB2(): number { return this.B2; }
    public setB2(valor: number): void { this.B2 = valor; }

    public MB1(): void { console.log("MB1"); }
    public MB2(): void { console.log("MB2"); }

    public MB3(): void {
        console.log("MB3");
    }
}