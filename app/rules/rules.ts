import {disregard, DisregardRules} from './disregard';

export class Rules {
    
    private calcData: any;
    disregardRules: any;
    
    constructor() {
        // Only map specific rules that we want to expose
        this.disregardRules = new DisregardRules();
    }
    
};
