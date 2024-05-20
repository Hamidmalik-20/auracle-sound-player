import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-player-block',
  templateUrl: './player-block.component.html',
  styleUrl: './player-block.component.css',
})
export class PlayerBlockComponent {
  @ViewChild('rangeLabel') rangeLabel!: ElementRef;
  isPlaying: boolean = false;
  rangeValue: number = 0;

  updateLabel(rangeInput: HTMLInputElement): void {
    const label = this.rangeLabel.nativeElement;
    const rangeWidth = rangeInput.offsetWidth;
    const labelWidth = label.offsetWidth;

    const max = +rangeInput.max;
    const min = +rangeInput.min;

    const left =
      this.rangeValue * (rangeWidth / max) -
      labelWidth / 2 +
      this.scale(this.rangeValue, min, max, 10, -10);

    label.style.left = `${left}px`;
  }

  scale(
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ): number {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  togglePlayPause(
    audioPlayer: HTMLAudioElement,
    audioControl: HTMLElement
  ): void {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }

    audioPlayer.onended = () => {
      this.isPlaying = false;
    };
  }
}
