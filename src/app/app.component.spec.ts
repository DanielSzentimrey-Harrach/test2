import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent UI', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Calculator');
  });
  
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(app.title);
  });

  it('should have number buttons', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    for(var i = 0; i <= 9; ++i) {
      expect(compiled.querySelector('button#b' + i).textContent).toBeCloseTo(i);
    }
  });

  it('should have add button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#add').textContent).toBe('+');
  });

  it('should have subtract button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#subtract').textContent).toBe('-');
  });

  it('should have multiply button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#multiply').textContent).toBe('*');
  });

  it('should have divide button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#divide').textContent).toBe('/');
  });

  it('should have equals button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#enter').textContent).toBe('=');
  });

  it('should have dot button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#dot').textContent).toBe('.');
  });

  // textarea should be readonly
  // textarea should not show outline when selected
  // 
});

describe('AppComponent business logic', () => {
  // JavaScript business logic
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Check add function', () => {
    const component = new AppComponent();
    expect(component.add(1,1)).toBe(2);
    expect(component.add(65534,10)).toBe(65544);
    expect(component.add(-10,-5)).toBe(-15);
  });

  it('Check subtract function', () => {
    const component = new AppComponent();
    expect(component.subtract(1,1)).toBe(0);
    expect(component.subtract(-65534,10)).toBe(-65544);
    expect(component.subtract(-10,-5)).toBe(-5);
  });

  it('Check multiply function', () => {
    const component = new AppComponent();
    expect(component.multiply(1,1)).toBe(1);
    expect(component.multiply(500,0)).toBe(0);
    expect(component.multiply(-5,-5)).toBe(25);
  });

  it('Check divide function', () => {
    const component = new AppComponent();
    expect(component.divide(10,2)).toBe(5);
    expect(component.divide(0,10)).toBe(0);
    expect(component.divide(20,-1)).toBe(-20);
    expect(component.divide(5,2)).toBe(2.5);
    expect(component.divide(20,0)).toThrowError;
  });
});
