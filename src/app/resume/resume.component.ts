import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resume',
  imports: [TranslateModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit, OnDestroy {  
  private langChangeSub!: Subscription;

  constructor(private translate: TranslateService,
    private titleService: Title,
    private metaService: Meta) { }

  ngOnInit(): void {
    this.setPageSEO();

    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.setPageSEO();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }


  private setPageSEO(): void {
    const title = this.translate.instant('RESUME.TITLE');
    const description = this.translate.instant('RESUME.DESCRIPTION');

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });

  }

  get resumeUrl(): string {
    const lang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    return lang === 'es' ? 'CV_Francisco_Robles_ES.pdf' : 'CV_Francisco_Robles_EN.pdf';
  }
}
