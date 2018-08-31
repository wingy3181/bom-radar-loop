import { TestBed, async } from '@angular/core/testing';
import { BomRadarLoopComponent } from './bom-radar-loop.component';

describe('BomRadarLoopComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BomRadarLoopComponent
      ],
    }).compileComponents();
  }));
  it('should create the bom-radar-loop', async(() => {
    const fixture = TestBed.createComponent(BomRadarLoopComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'bom-radar-loop'`, async(() => {
    const fixture = TestBed.createComponent(BomRadarLoopComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bom-radar-loop');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(BomRadarLoopComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to bom-radar-loop!');
  }));
});
