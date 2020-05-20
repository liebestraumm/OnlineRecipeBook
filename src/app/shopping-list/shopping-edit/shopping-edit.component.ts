import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  addIngredient() {
      this.shoppingListService.addIngredients(new Ingredient(this.nameInput.nativeElement.value,
                                              this.amountInput.nativeElement.value));
      this.nameInput.nativeElement.value = "";
      this.amountInput.nativeElement.value = "";
  }
  ngOnInit(): void {
  }


}
