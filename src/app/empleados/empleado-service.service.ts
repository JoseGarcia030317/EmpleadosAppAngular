import { Injectable } from '@angular/core';
import { Empleado } from './interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private _empleados: Empleado[] = [];

  getEmpleados(): Empleado[] {
    return this._empleados.slice();
  }

  agregarEmpleado(empleado: Empleado): void {
    this._empleados.push(empleado);
  }

  eliminarEmpleado(index: number): void {
    this._empleados.splice(index, 1);
  }
}
