import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    DialogModule,
    AvatarModule,
    SelectButtonModule,
  ],
  exports: [
    ButtonModule,
    DialogModule,
    AvatarModule,
    SelectButtonModule,
  ]
})
export class StylesModule { }
