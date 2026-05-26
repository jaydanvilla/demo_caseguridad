import { Component } from '@angular/core';
import { ScrollAnimDirective } from '../../directives/scroll-anim.directive';

@Component({
  selector: 'app-entidades',
  imports: [ScrollAnimDirective],
  templateUrl: './entidades.component.html',
  styleUrl: './entidades.component.css'
})
export class EntidadesComponent {}