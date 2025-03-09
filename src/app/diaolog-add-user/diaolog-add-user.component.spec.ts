import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaologAddUserComponent } from './diaolog-add-user.component';

describe('DiaologAddUserComponent', () => {
  let component: DiaologAddUserComponent;
  let fixture: ComponentFixture<DiaologAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaologAddUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaologAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
