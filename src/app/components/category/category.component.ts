import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
  signal,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  MatChipGrid,
  MatChipInput,
  MatChipInputEvent,
  MatChipRemove,
  MatChipRow,
} from '@angular/material/chips';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    MatFormField,
    MatChipGrid,
    MatChipRow,
    MatChipRemove,
    MatIcon,
    FormsModule,
    MatChipInput,
    MatFormFieldModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  readonly separatorKeyCodes: number[] = [ENTER, COMMA];

  currentCategory = model('');
  readonly categories = signal<Partial<string[]>>([]);

  // todo: consider to replace with Set or get rid off the tags duplication
  readonly allCategories = [
    'Other',
    'Transport',
    'Food & Drinks',
    'Pet',
    'Rent',
    'Health',
    'Fun',
  ];

  readonly filteredCategories = computed(() => {
    const current = this.currentCategory().toLowerCase();
    return current
      ? this.allCategories.filter(category =>
          category.toLowerCase().includes(current)
        )
      : this.allCategories.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    const isPresent = this.categories().some(
      category => category && category.toLowerCase() === value.toLowerCase()
    );

    if (value && !isPresent) {
      this.categories.update(categories => [...categories, value]);
    }

    this.currentCategory.set('');
  }

  remove(category = '') {
    this.categories.update(categories => {
      const index = categories.indexOf(category);
      if (index < 0) {
        return categories;
      }

      categories.splice(index, 1);
      this.announcer.announce(`Removed ${category}`);
      return [...categories];
    });
  }

  selected(event: MatAutocompleteSelectedEvent) {
    const value = event.option.viewValue;

    const isPresent = this.categories().some(category => category === value);
    if (!isPresent) {
      this.categories.update(categories => [...categories, value]);
    }

    this.currentCategory.set('');
    event.option.deselect();
  }
}
