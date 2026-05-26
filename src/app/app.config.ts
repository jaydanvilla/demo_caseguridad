import { ApplicationConfig, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { provideRouter, RouterStateSnapshot, TitleStrategy, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(`${title} - CASEGURIDAD`);
    } else {
      this.title.setTitle('CASEGURIDAD - Seguridad Integral y Protección VIP');
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
    { provide: TitleStrategy, useClass: PageTitleStrategy }
  ]
};
