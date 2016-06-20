import {DataLoader} from '../data/dataloader';
import {Input} from './inputs';

export interface Disregard {
    type: string;
    amount: number;
    collar: number;
}

export class DisregardRules {

    private data: DataLoader;
    
    constructor(data: DataLoader) {
        this.data = data;
    }

    getBenefitsDisregards(inputData: Input[]): number[] {
        return inputData.map((input) => {
            return this.applyDisregard(input.rationalisedValue(), this.getBenefitsDisregard(input.code));
        });
    }
    
    getBenefitsDisregard(code: string): Disregard {
        return this.data.benefitsDisregardData()
            .filter((item) => { return item.ClientDetailsCode === code; })
            .map(this.filterDisregardFields)[0];
    }

    filterDisregardFields(d: any): Disregard {
        return {
            amount: d.DisregardAmount,
            type: d.FullInd,
            collar: d.CollarAmount
        };
    };

    private applyDisregard(value: number, disregard: Disregard): number {
        if (disregard.type === 'N') { return value * disregard.amount / 100; }
        return disregard.amount;
    }

}