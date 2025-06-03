import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  imports: [TranslateModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private translate: TranslateService) { }

  get resumeUrl(): string {
    const lang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    return lang === 'es' ? 'CV_Francisco_Robles_ES.pdf' : 'CV_Francisco_Robles_EN.pdf';
  }
}
