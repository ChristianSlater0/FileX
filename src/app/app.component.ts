import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

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

  constructor(private formBuilder: FormBuilder, public http: HttpClient) {
    this.form = this.formBuilder.group({
      directory: ['']
    });
    localStorage.setItem("path", "/home")
    this.getDirectory()
  }

  getDirectory() {
    this.http.get(`/api/ls?path=${localStorage.getItem("path")}`).subscribe((response: any[]) => {
      // console.log(response);
      this.directory = response
    });
  }

  toParent() {
    var str = localStorage.getItem("path");
    if (str != "/home") {
      localStorage.setItem("path", str.substring(0, str.lastIndexOf("/")));
      this.getDirectory();
    }

  }

  createFile(name: string) {
    
    if (name) {
      this.http.put(`/api/mkfile?path=${localStorage.getItem("path")}&name=${name}`, null).subscribe((obj)=>{});
      this.getDirectory();
    }
  }
  createFolder(name: string) {
    
    if (name) {
      this.http.put(`/api/mkfile?path=${localStorage.getItem("path")}&name=${name}`, null).subscribe((obj)=>{});
      this.getDirectory();
    }
  }

  cd(filder: any) {
    if (filder.isDirectory) {

      localStorage.setItem("path", localStorage.getItem("path") + "/" + filder.name)
      this.getDirectory();
    }
    // this.directory =

    // [
    //   { id: 4096, name: 'NOsadfDE', value: 'fa fa-folder' },
    //   { id: 365, name: 'Noasdftes', value: 'fa fa-folder' },
    //   { id: 2, name: 'Filasdfsadfe 3', value: 'fa fa-file' }
    // ];;
  }

  submit() {
    //this does nothing
    console.log(this.form.value);
  }

}