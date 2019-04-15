import { Injectable, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService implements AfterViewInit {

  // name: FormControl;
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ) {

    // this.name = new FormControl('', [
    //   Validators.required,
    // ]);
    this.form = this.fb.group({
      name: [null, Validators.required],
    });
  }

  call(): Observable<any> {
    return this.http.get<any>(
      'http://www.mocky.io/v2/5cb4a01d330000b01511bc57');
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe(() => {
      console.log('FORM:', this.form.value);
    });
  }
  onValueChange(data: any) {
    this.form.controls.name.setValue(data.hello);
  }
}
