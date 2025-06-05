import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {

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
    const title = this.translate.instant('PROJECTS.PROJECTS');
    const description = this.translate.instant('PROJECTS.DESCRIPTION');

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });

  }
}
