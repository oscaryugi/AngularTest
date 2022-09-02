import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBodyHeaderComponent } from './web-body-header.component';

describe('WebBodyHeaderComponent', () => {
  let component: WebBodyHeaderComponent;
  let fixture: ComponentFixture<WebBodyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebBodyHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
