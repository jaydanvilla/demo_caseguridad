import { Component } from '@angular/core';
import { ScrollAnimDirective } from '../../directives/scroll-anim.directive';

@Component({
  selector: 'app-certificaciones',
  imports: [ScrollAnimDirective],
  templateUrl: './certificaciones.component.html',
  styleUrl: './certificaciones.component.css'
})
export class CertificacionesComponent {}