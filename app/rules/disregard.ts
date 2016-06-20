import {DataLoader} from '../data/dataloader';

export interface disregard {
    type: string;
    amount: number;
    collar: number;
}

export class DisregardRules {
    
    dataLoader: any;
    benefitsDisregards: any[];

    constructor() { 
        this.dataLoader = new DataLoader();
        this.benefitsDisregards = this.dataLoader.benefitsDisregardData();
    }
    
    getBenefitsDisregard(code: string): disregard {
        return this.benefitsDisregards
            .filter((item) => { return item.ClientDetailsCode === code; })
            .map(this.extractDisregardFields)[0];
    }

    extractDisregardFields(d: any): disregard {
        return {
            amount: d.DisregardAmount,
            type: d.FullInd,
            collar: d.CollarAmount
        };
    };

}