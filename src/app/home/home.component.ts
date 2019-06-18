import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<any>;

  constructor() { 
    this.items = [
      { image: "screenshot-almundo.jpg", name: "Almundo Test", description: "angular2+, ux/ui, webapp", href: "https://portafolio.josecaceres.info/almundo/" },
      { image: "screenshot-unixjs.jpg", name: "Unixjs Framework", description: "Javascript/Vanilla, ux/ui, webapp", href: "https://unixjs.com.co/unixjs.html" },
      { image: "screenshot-restaurantetic.jpg", name: "Restaurantetic", description: "angular2+, ux/ui, webapp", href: "https://restaurantetic.com" },
      { image: "screenshot-quick.png", name: "Quick Express", description: "frontend, backend, webapp", href: "https://www.quick.com.co/express/pidete-un-quicker/" },
    ];
  }

  ngOnInit() {
  }

}
