import {ASD} from './asd';
import {disregard} from '../rules/disregard';

export class DataLoader {

    // TODO: could define interface for each file type    
    asd: any[];
    asr: any[];
    beb: any[];
    isa: any[];
    rva: any[];
    
    constructor() {
        this.asd = ASD;
    }

    public benefitsDisregardData(): any[] {
        return this.asd.filter((item) => {
            return (item.AsrId == "CRAG") &&
                (item.DurationCode == "PERM") &&
                (item.ClientDetailsType == "BENEFIT") &&
                (item.FullInd == "N");
                //AND EndDate IS EMPTY
        });
    } 
    
}