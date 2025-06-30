import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { EmpleadoTableComponent } from './empleado-table/empleado-table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    EmpleadoFormComponent,
    EmpleadoTableComponent
  ],
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    FormsModule
  ],
  exports : [
    HeaderComponent,
    EmpleadoFormComponent,
    EmpleadoTableComponent
  ]
})
export class EmpleadosModule { }
