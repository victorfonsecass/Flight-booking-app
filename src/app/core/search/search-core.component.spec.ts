import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCoreComponent } from './search-core.component';

describe('FlightSearchComponent', () => {
  let component: SearchCoreComponent;
  let fixture: ComponentFixture<SearchCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
