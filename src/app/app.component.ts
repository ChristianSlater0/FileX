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
directory = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      directory: ['']
    });
    of(this.getDirectory()).subscribe(directory => {
      this.directory = directory;
      this.form.controls.orders.patchValue(this.directory[0].id);
    });
  }

  getDirectory() {
    return [
      { id: 4096, name: 'NODE', value: 'fa fa-folder' },
      { id: 365, name: 'Notes', value: 'fa fa-folder' },
      { id: 2, name: 'File 3', value: 'fa fa-file' },
      { id: 2, name: 'File 4', value: 'fa fa-file' }
    ];
  }
 
  doSomething() {
    this.directory =[
      { id: 4096, name: 'NOsadfDE', value: 'fa fa-folder' },
      { id: 365, name: 'Noasdftes', value: 'fa fa-folder' },
      { id: 2, name: 'Filasdfsadfe 3', value: 'fa fa-file' }
    ];;
  }
 
  submit() {
    //this does nothing
    console.log(this.form.value);
  }

}