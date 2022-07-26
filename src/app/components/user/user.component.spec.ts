import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,FormsModule],
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance
    // se espera que ademas de True, sea un componente que exista
    expect(app).toBeTruthy();
  });

  it('Add User', () => {
    // se toma control del componente
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance

    //se detectan cambios
    fixture.detectChanges();


  
    //se setean la supuesta informacion agregada
    app.selectedUser.nombre = "Nombre"
    
    app.selectedUser.primerApellido = "primerApellido"
    app.selectedUser.segundoApellido = "segundoApellido"
    app.selectedUser.email = "mail"
    app.selectedUser.telefono = "telefono"

    //se hace accion del boton save
    let btnElement = fixture.debugElement.query(By.css('button.btn-primary'))
    btnElement.nativeElement.click()

  
    //se compara
    expect(1).toEqual(app.check)
  });

  it('DELETE', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.componentInstance
    // se espera que ademas de True, sea un componente que exista

    //se detectan cambios
    fixture.detectChanges();

    let btnElement = fixture.debugElement.query(By.css('.delete'))
    //btnElement.nativeElement.click()

    //expect(true).toEqual(app.deleted)
    
  });


});
