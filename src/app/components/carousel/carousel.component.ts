import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() photos: { url: string, alt: string }[] = [];
  currentSlide = 0;

  prevSlide(): void {
    this.currentSlide = (this.currentSlide === 0) ? (this.photos.length - 1) : (this.currentSlide - 1);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide === this.photos.length - 1) ? 0 : (this.currentSlide + 1);
  }
}
