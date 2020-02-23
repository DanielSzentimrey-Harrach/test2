import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Calculator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Calculator');
  });

  it('pressing the number buttons correctly update the textarea', () => {
    page.getNumberButton('1').click();
    page.getNumberButton('2').click();
    page.getNumberButton('3').click();
    page.getNumberButton('4').click();
    page.getNumberButton('5').click();
    page.getNumberButton('6').click();
    page.getNumberButton('7').click();
    page.getNumberButton('8').click();
    page.getNumberButton('0').click();
    page.getDotButton().click();
    page.getNumberButton('9').click();
    expect(page.getTextareaContent()).toBe('123456780.9');
  });

  it('basic operations work and update the textarea', () => {
    page.navigateTo();
    page.getNumberButton('5').click();
    page.getAddButton().click();
    page.getNumberButton('7').click();
    page.getEnterButton().click();
    expect(page.getTextareaContent()).toBe('12');

    page.getNumberButton('5').click();
    page.getSubtractButton().click();
    page.getNumberButton('7').click();
    page.getEnterButton().click();
    expect(page.getTextareaContent()).toBe('-2');

    page.getNumberButton('5').click();
    page.getMultiplyButton().click();
    page.getNumberButton('7').click();
    page.getEnterButton().click();
    expect(page.getTextareaContent()).toBe('35');

    page.getNumberButton('5').click();
    page.getDivideButton().click();
    page.getNumberButton('2').click();
    page.getEnterButton().click();
    expect(page.getTextareaContent()).toBe('2.5');
  });

  // basic operations work and update the textbox
  // pressing the minus sign before a number works correctly (think of all the cases, negative number can be first, or after an operator button was pressed)
  // starting a number with a . is considered 0.
  // pressing an operator button acts as equal sign if there is a number in the memory

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
