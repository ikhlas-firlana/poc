import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(
    public formService: FormService
  ) {
   }

  ngOnInit() {
    this.formService.call().subscribe((data: any) => {
      console.log('result::call::', data);
      this.formService.onValueChange(data);
    });
  }

}
