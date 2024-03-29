import { Component, OnInit } from '@angular/core';
import CardsInformation from 'src/app/data/cardsinformation';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	cards: any;
	constructor() {
		this.cards = new CardsInformation().cards;
	}

	ngOnInit(): void {
	}

}
