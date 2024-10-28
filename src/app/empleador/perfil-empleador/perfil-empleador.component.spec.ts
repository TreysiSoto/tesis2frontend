import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEmpleadorComponent } from './perfil-empleador.component';

describe('PerfilEmpleadorComponent', () => {
  let component: PerfilEmpleadorComponent;
  let fixture: ComponentFixture<PerfilEmpleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilEmpleadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
