import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StylesModule } from 'src/app/shared/styles/styles.module';

@Component({
  selector: 'app-add-remove-levels',
  standalone: true,
  imports: [StylesModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-remove-levels.component.html',
  styleUrl: './add-remove-levels.component.scss'
})
export class AddRemoveLevelsComponent {
  stateOptions: any[] = [{ label: 'Add', value: 'add' },{ label: 'Remove', value: 'remove' }];
  valueOption: string = 'add';

  //Formularios
  formAdd: FormGroup = this.fb.group({
    type: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  toggleOptionButton() {
    console.log(this.valueOption);
  }

  addLevel() {
    console.log('Level added');
  }
  
  removeLevel() {
    console.log('Level added');
  }
}
