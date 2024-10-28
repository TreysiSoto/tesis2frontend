import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosTrabajadorComponent } from './comentarios-trabajador.component';

describe('ComentariosTrabajadorComponent', () => {
  let component: ComentariosTrabajadorComponent;
  let fixture: ComponentFixture<ComentariosTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosTrabajadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
