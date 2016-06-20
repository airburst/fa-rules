import {DataLoader} from '../data/dataloader';
import {Disregard, DisregardRules} from './disregard';
import {Input, mockInputs} from './inputs';

export class Rules {

    private dataLoader: any;
    private data: any;
    public inputs: Input[] = mockInputs;
    public disregards: any;

    constructor() {
        this.dataLoader = new DataLoader();
        this.disregards = new DisregardRules(this.dataLoader);
    }

    calculateDisregards() {
        return {
            benefits: this.calculateBenefitsDisregards()
            //expenses: this.calculateExpensesDisregards();
        }
    }

    calculateBenefitsDisregards() {
        return this.disregards.getBenefitsDisregards(this.inputs);
    }

};
