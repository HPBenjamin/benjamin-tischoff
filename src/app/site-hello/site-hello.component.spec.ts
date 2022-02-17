import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHelloComponent } from './site-hello.component';

describe('SiteHelloComponent', () => {
  let component: SiteHelloComponent;
  let fixture: ComponentFixture<SiteHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteHelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
