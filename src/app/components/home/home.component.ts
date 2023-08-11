import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

interface NavToggle {
  menu: boolean;
  cross: boolean;
}

interface Slider {
  hotel: boolean;
  villa: boolean;
  restaurant: boolean;
  tourism: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //nav bar action
  @Output() onToggleNav: EventEmitter<NavToggle> = new EventEmitter();
  menu = true;
  cross = false;
  screenwidth = 0;

  openMenu(): void {
    this.menu = false;
    this.cross = true;
    this.onToggleNav.emit({ menu: this.menu, cross: this.cross });
  }

  closeMenu(): void {
    this.menu = true;
    this.cross = false;
    this.onToggleNav.emit({ menu: this.menu, cross: this.cross });
  }
  //slider actions
  @Output() onSliderAction: EventEmitter<Slider> = new EventEmitter();
  hotel = true;
  villa = false;
  restaurant = false;
  tourism = false;

  hotelSlide() {
    this.hotel = true;
    this.villa = false;
    this.restaurant = false;
    this.tourism = false;
    this.onSliderAction.emit({
      hotel: this.hotel,
      villa: this.villa,
      restaurant: this.restaurant,
      tourism: this.tourism,
    });
  }

  villaSlide() {
    this.hotel = false;
    this.villa = true;
    this.restaurant = false;
    this.tourism = false;
    this.onSliderAction.emit({
      hotel: this.hotel,
      villa: this.villa,
      restaurant: this.restaurant,
      tourism: this.tourism,
    });
  }

  restaurantSlide() {
    this.hotel = false;
    this.villa = false;
    this.restaurant = true;
    this.tourism = false;
    this.onSliderAction.emit({
      hotel: this.hotel,
      villa: this.villa,
      restaurant: this.restaurant,
      tourism: this.tourism,
    });
  }

  tourismSlide() {
    this.hotel = false;
    this.villa = false;
    this.restaurant = false;
    this.tourism = true;
    this.onSliderAction.emit({
      hotel: this.hotel,
      villa: this.villa,
      restaurant: this.restaurant,
      tourism: this.tourism,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
