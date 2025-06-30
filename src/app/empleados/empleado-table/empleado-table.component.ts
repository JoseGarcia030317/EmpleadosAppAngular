import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../interfaces/Empleado';

@Component({
  selector: 'empleado-table',
  standalone: false,
  templateUrl: './empleado-table.component.html',
  styleUrl: './empleado-table.component.css'
})
export class EmpleadoTableComponent {
  @Input() empleados: Empleado[] = [];
  @Output() eliminar = new EventEmitter<number>();
}
