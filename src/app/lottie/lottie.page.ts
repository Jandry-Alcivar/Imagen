import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.page.html',
  styleUrls: ['./lottie.page.scss'],
})
export class LottiePage /* implements OnInit */ {

  constructor() { }
  options: AnimationOptions = {
    path: '/assets/animation.json',
    };
    animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
    }

  
}
