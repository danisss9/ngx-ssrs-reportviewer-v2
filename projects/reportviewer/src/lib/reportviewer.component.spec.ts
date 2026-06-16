import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportViewerComponent } from './reportviewer.component';

describe('ReportViewerComponent', () => {
  let component: ReportViewerComponent;
  let fixture: ComponentFixture<ReportViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportViewerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('reporturl', 'TestReport');
    fixture.componentRef.setInput('reportserver', 'https://example.com/ReportServer');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
