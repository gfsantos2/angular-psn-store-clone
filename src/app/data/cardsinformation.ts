
export default class CardsInformation {
	cards: any = [];

	constructor() {
		this.cards.push({ image: 'assets/bt-1.jpg', label: 'DIGITAL', type: 'DIGITAL | PS4', price: 'R$ 129,99' });
		this.cards.push({ image: 'assets/bt-4.jpg', label: 'EXCLUSIVE', type: 'DISC | PS5', price: 'R$ 269,99' });
		this.cards.push({ image: 'assets/ac-cover.jpg', label: 'BEST OF YEAR', type: 'DIGITAL | PS5', price: 'R$ 369,99' })
		this.cards.push({ image: 'assets/bt-hardline.jpg', label: 'NEW', type: 'DIGITAL | PS3 ', price: 'R$ 369,99' });

	}
}

