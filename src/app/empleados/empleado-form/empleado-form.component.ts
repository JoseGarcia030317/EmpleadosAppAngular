import { Component, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../interfaces/Empleado';

@Component({
  selector: 'empleado-form',
  standalone: false,
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.css'
})
export class EmpleadoFormComponent {
  @Output() empleadoAgregado = new EventEmitter<Empleado>();

  nuevoEmpleado: Empleado = {
    numEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: new Date(),
    sexo: ''
  };

  onSubmit() {
    // validar que los campos esten completos
    if (!this.nuevoEmpleado.nombre || !this.nuevoEmpleado.correo || !this.nuevoEmpleado.telefono || !this.nuevoEmpleado.fechaNacimiento || !this.nuevoEmpleado.sexo) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const empleado: Empleado = {
      numEmpleado: this.nuevoEmpleado.numEmpleado,
      nombre: this.nuevoEmpleado.nombre,
      correo: this.nuevoEmpleado.correo,
      telefono: this.nuevoEmpleado.telefono,
      fechaNacimiento: this.nuevoEmpleado.fechaNacimiento,
      sexo: this.nuevoEmpleado.sexo
    };

    this.empleadoAgregado.emit(empleado);

    // Resetear el formulario
    this.nuevoEmpleado = {
      numEmpleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: new Date(),
      sexo: ''
    };
  }
}
