export class Input {
    
    public code: string;
    public frequency: string;
    public value: number;
    private conversion = [
        ['Daily', 7],
        ['Weekly', 1],
        ['Monthly', 0.230136986],   // 12 / 365
        ['Annually', 0.019178082]   //  1 / 365
    ];

    constructor(code: string, value?: number, frequency?: string) {
        this.code = code;
        this.value = (value) ? value : 0;
        this.setFrequency(frequency);
    }

    private setFrequency(f?: string) {
        this.frequency = (f) ? f : 'Weekly';
    }

    public rationalisedValue(): number {
        return this.convert(this.frequency);
    }

    private isWeekly() {
        return this.frequency === 'Weekly';
    }

    private convert(frequency: string): number {
        let c = this.conversion.filter((c) => { return c[0] === frequency; })[0];
        return this.value * Number(c[1]);
    }

}


export const mockInputs: Input[] = [
    new Input('WARPEN', 110.00),
    new Input('PSCS', 300.00, 'Monthly')
];