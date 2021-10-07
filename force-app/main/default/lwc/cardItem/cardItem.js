import { api, LightningElement } from 'lwc';

export default class CardItem extends LightningElement {
	@api number;
	@api label;
	@api icon_bg;
}