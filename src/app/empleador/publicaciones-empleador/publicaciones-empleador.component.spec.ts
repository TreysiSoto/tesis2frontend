import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesEmpleadorComponent } from './publicaciones-empleador.component';

describe('PublicacionesEmpleadorComponent', () => {
  let component: PublicacionesEmpleadorComponent;
  let fixture: ComponentFixture<PublicacionesEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesEmpleadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
