import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-shipping.component.html',
  styleUrls: ['./global-shipping.component.scss']
})
export class GlobalShippingComponent implements OnInit {
  @ViewChild('shippingVideo') videoElement!: ElementRef<HTMLVideoElement>;
  videoLoaded = false;
  videoError = false;

  constructor() { }

  ngOnInit(): void {}

  onVideoLoaded(): void {
    this.videoLoaded = true;
    console.log('Video loaded successfully');
  }

  onVideoError(): void {
    this.videoError = true;
    console.error('Video failed to load');
  }

  onVideoCanPlay(): void {
    console.log('Video can play');
    // Try to play the video when it's ready
    this.playVideo();
  }

  playVideo(): void {
    if (this.videoElement?.nativeElement) {
      this.videoElement.nativeElement.play().catch(error => {
        console.error('Video play failed:', error);
      });
    }
  }
}
