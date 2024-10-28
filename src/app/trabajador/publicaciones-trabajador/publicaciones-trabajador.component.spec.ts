import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesTrabajadorComponent } from './publicaciones-trabajador.component';

describe('PublicacionesTrabajadorComponent', () => {
  let component: PublicacionesTrabajadorComponent;
  let fixture: ComponentFixture<PublicacionesTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesTrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
