import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { FocusOnLoadDirective } from './directives/focus-on-load.directive';

@NgModule({
  declarations: [ButtonComponent, FocusOnLoadDirective],
  imports: [CommonModule],
  exports: [ButtonComponent, FocusOnLoadDirective],
})
export class SharedModule {}
