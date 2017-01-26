import { browser, element, by } from 'protractor';

export class AmbientesCreativosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('acca-root h1')).getText();
  }
}
