import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-app';
  constructor(private translateService: TranslateService) {
    this.translateService.use(this.translateService.defaultLang);
  }
  switchLang(lang: string): void {
    this.translateService.use(lang);
  }
  currentLang() {
    if (this.translateService.currentLang === 'ar') {
      return (
        (document.body.style.direction = 'rtl') &&
        document.body.classList.add('rtl')
      );
    }
    return (
      (document.body.style.direction = 'ltr') &&
      document.body.classList.remove('rtl')
    );
  }
}
