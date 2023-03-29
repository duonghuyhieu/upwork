import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { FocusOnLoadDirective } from './directives/focus-on-load.directive';
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { TransCFPipe } from './pipes/trans-cf.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    FocusOnLoadDirective,
    DatePipePipe,
    TransCFPipe,
  ],
  imports: [CommonModule],
  exports: [ButtonComponent, FocusOnLoadDirective, TransCFPipe],
})
export class SharedModule {}
