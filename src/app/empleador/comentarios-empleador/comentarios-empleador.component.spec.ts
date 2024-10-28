import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosEmpleadorComponent } from './comentarios-empleador.component';

describe('ComentariosEmpleadorComponent', () => {
  let component: ComentariosEmpleadorComponent;
  let fixture: ComponentFixture<ComentariosEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosEmpleadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
