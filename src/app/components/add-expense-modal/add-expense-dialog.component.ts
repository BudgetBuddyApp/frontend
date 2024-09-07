import { Component, inject, model } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogData } from '@app/model/dialog-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatChip } from '@angular/material/chips';
import { CategoryComponent } from '@app/components/category/category.component';

@Component({
  selector: 'app-add-expense-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    MatChip,
    CategoryComponent,
  ],
  templateUrl: './add-expense-dialog.component.html',
  styleUrl: './add-expense-dialog.component.css',
})
export class AddExpenseDialogComponent {
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  title = model(this.data.title);
}
