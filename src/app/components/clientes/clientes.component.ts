import { Component } from '@angular/core';
import { ScrollAnimDirective } from '../../directives/scroll-anim.directive';

@Component({
  selector: 'app-clientes',
  imports: [ScrollAnimDirective],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {}