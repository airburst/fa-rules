import {Rules} from './rules/rules';
import {debug} from './utils';
//document.getElementById('debug').innerText = 'test';

let rules = new Rules();
console.log(rules.disregardRules.benefitsDisregards);

debug(rules.disregardRules.getBenefitsDisregard('WARPEN'));
