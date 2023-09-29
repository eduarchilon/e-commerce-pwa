import { Component, OnInit, Input } from '@angular/core';
import { SOCIAL_MEDIA_FOOTER } from 'src/app/data/social-media.data';
import { SocialMedia } from 'src/app/model/social-media.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() isToggle!: boolean;

  smfs: SocialMedia[] = SOCIAL_MEDIA_FOOTER;

  ngOnInit(): void {
    // console.log(this.smfs);
  }
}
