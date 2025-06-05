import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {
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
    const title = this.translate.instant('CONTACT.BOLD');
    const description = this.translate.instant('CONTACT.DESCRIPTION');

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
