import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() shoppingEditEvent = new EventEmitter<Ingredient>();

  addIngredient() {
      this.shoppingEditEvent.emit(new Ingredient(this.nameInput.nativeElement.value,
                                                 this.amountInput.nativeElement.value));
      this.nameInput.nativeElement.value = "";
      this.amountInput.nativeElement.value = "";
  }
  ngOnInit(): void {
  }


}
