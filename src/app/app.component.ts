import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';


//test garbage

form: FormGroup;
  orders = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // mimic async orders
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      this.form.controls.orders.patchValue(this.orders[0].id);
    });

    // synchronous orders
    // this.orders = this.getOrders();
    // this.form.controls.orders.patchValue(this.orders[0].id);
  }

  getOrders() {
    return [
      { id: 4096, name: 'NODE', value: 'true' },
      { id: 365, name: 'Notes', value: 'true' },
      { id: 2, name: 'File 3', value: 'false' },
      { id: 2, name: 'File 4', value: 'false' }
    ];
  }
 
  submit() {
    console.log(this.form.value);
  }

}