import { Component } from '@angular/core';

import { Empleado } from './empleados/interfaces/Empleado';
import { EmpleadoService } from './empleados/empleado-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  empleados: Empleado[] = [];
  showSuccess = false;
  successMessage = '';

  constructor(private empleadoService: EmpleadoService) {
    this.empleados = this.empleadoService.getEmpleados();
  }

  onEmpleadoAgregado(empleado: Empleado) {
    this.empleadoService.agregarEmpleado(empleado);
    this.empleados = this.empleadoService.getEmpleados();
    this.mostrarAlerta('Empleado agregado correctamente');
  }

  onEmpleadoEliminado(index: number) {
    this.empleadoService.eliminarEmpleado(index);
    this.empleados = this.empleadoService.getEmpleados();
    this.mostrarAlerta('Empleado eliminado');
  }

  mostrarAlerta(mensaje: string) {
    this.successMessage = mensaje;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }
}
