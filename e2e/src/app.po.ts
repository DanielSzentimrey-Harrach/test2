import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.content h1')).getText() as Promise<string>;
  }

  getNumberButton(id: string) {
    return element(by.css('#b' + id));
  }

  getDotButton() {
    return element(by.css('#dot'));
  }

  getAddButton() {
    return element(by.css('#add'));
  }

  getSubtractButton() {
    return element(by.css('#subtract'));
  }

  getMultiplyButton() {
    return element(by.css('#multiply'));
  }

  getDivideButton() {
    return element(by.css('#divide'));
  }

  getEnterButton() {
    return element(by.css('#enter'));
  }

  getTextareaContent(): any {
    return element(by.css("textarea#display")).getText() as Promise<string>;
  }

  getTextarea() {
    return element(by.css("textarea#display")); 
  }
  
}
