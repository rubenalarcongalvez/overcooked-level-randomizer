import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveLevelsComponent } from './add-remove-levels.component';

describe('AddRemoveLevelsComponent', () => {
  let component: AddRemoveLevelsComponent;
  let fixture: ComponentFixture<AddRemoveLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveLevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRemoveLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
