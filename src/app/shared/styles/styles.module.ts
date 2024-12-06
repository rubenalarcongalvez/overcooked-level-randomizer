import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    DialogModule,
    AvatarModule,
    SelectButtonModule,
    MessagesModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
})
export class StylesModule { }
