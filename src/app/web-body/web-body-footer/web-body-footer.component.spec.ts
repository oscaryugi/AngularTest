import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBodyFooterComponent } from './web-body-footer.component';

describe('WebBodyFooterComponent', () => {
  let component: WebBodyFooterComponent;
  let fixture: ComponentFixture<WebBodyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebBodyFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebBodyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
