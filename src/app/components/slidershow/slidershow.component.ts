import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/carteleta-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slidershow',
  templateUrl: './slidershow.component.html',
  styleUrls: ['./slidershow.component.css']
})
export class SlidershowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];
  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit():void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      
      //loop: true,
    
    });
  }
  ngOnInit(): void {
    
  }
  onSlideNext(){
    this.mySwiper.slideNext();
  }
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}
