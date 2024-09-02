import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    DialogModule,
    AvatarModule,
    SelectButtonModule,
    MessagesModule,
  ],
  exports: [
    ButtonModule,
    DialogModule,
    AvatarModule,
    SelectButtonModule,
    MessagesModule,
  ]
})
export class StylesModule { }
