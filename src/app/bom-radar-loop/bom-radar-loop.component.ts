import { Component, ViewEncapsulation, Input, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'bom-radar-loop',
  templateUrl: './bom-radar-loop.component.html',
  styleUrls: ['./bom-radar-loop.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BomRadarLoopComponent implements OnInit, OnDestroy {
  public BOM_URL = 'http://www.bom.gov.au';
  public MINUTE_INTERVAL_OBSERVATIONS = 15;
  public MINUTE_INTERVAL_ANIMATION = 6;
  public FRAMES_ANIMATION = 6;

  @Input() station;

  public animationInterval;
  public observationsInterval;
  public animationSrc: string | SafeStyle = '';
  public animationImageMinute = '';
  public legendBackgroundImageUrl: string | SafeStyle = '';
  public backgroundBackgroundImageUrl: string | SafeStyle = '';
  public observationsBackgroundImageUrls: SafeStyle[] = [];
  public locationsBackgroundImageUrl: string | SafeStyle = '';
  public rangeBackgroundImageUrl: string | SafeStyle = '';
  public topographyBackgroundImageUrl: string | SafeStyle = '';

  constructor(private sanitizer: DomSanitizer) {}

  public generateObservationsBackgroundImageUrls(): void {
    this.observationsBackgroundImageUrls = Array.from(Array(this.MINUTE_INTERVAL_OBSERVATIONS).keys())
    .map(i => {
      // tslint:disable-next-line:max-line-length
      return this.sanitizer.bypassSecurityTrustStyle(`url(${this.BOM_URL}/radar/${this.station}.observations.${moment.utc().subtract(i, 'minutes').format('YYYYMMDDHHmm')}.png)`);
    });
  }
  ngOnInit(): void {
    this.generateObservationsBackgroundImageUrls();
    this.observationsInterval = setInterval(() => {
      this.generateObservationsBackgroundImageUrls();
    }, this.MINUTE_INTERVAL_OBSERVATIONS * 60 * 1000);

    let i = 0;
    this.animationInterval = setInterval(() => {
      const mostRecentImageMinute = (Math.floor(moment().minutes() / this.MINUTE_INTERVAL_ANIMATION) - 1) * this.MINUTE_INTERVAL_ANIMATION;
      this.animationImageMinute = moment.utc()
          .minutes(mostRecentImageMinute)
          .subtract(this.MINUTE_INTERVAL_ANIMATION * this.FRAMES_ANIMATION, 'minutes')
          .add((this.MINUTE_INTERVAL_ANIMATION * (i++ % (this.MINUTE_INTERVAL_ANIMATION + 1))), 'minutes')
          .format('YYYYMMDDHHmm');

      // tslint:disable:max-line-length
      this.animationSrc = `${this.BOM_URL}/radar/${this.station}.T.${this.animationImageMinute}.png`;
      this.legendBackgroundImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.BOM_URL}/products/radar_transparencies/IDR.legend.0.png)`);
      this.backgroundBackgroundImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.BOM_URL}/products/radar_transparencies/${this.station}.background.png)`);
      this.locationsBackgroundImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.BOM_URL}/products/radar_transparencies/${this.station}.locations.png)`);
      this.rangeBackgroundImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.BOM_URL}/products/radar_transparencies/${this.station}.range.png)`);
      this.topographyBackgroundImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.BOM_URL}/products/radar_transparencies/${this.station}.topography.png)`);
      // tslint:enable:max-line-length
    }, 400);
  }

  ngOnDestroy(): void {
    this.animationInterval();
    this.observationsInterval();
  }
}
