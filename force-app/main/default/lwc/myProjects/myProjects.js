import { api, LightningElement } from 'lwc';
import fontAwesomeAll from '@salesforce/resourceUrl/fontAwesomeAll';
import fontAwesomeCss from '@salesforce/resourceUrl/fontAwesomeCss';

export default class MyProjects extends LightningElement {
	@api show_button = false;
	@api card_title;

	handleClick(e){
		e.preventDefault();
	}
}