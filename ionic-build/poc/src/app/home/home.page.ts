import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { NativeService } from '../native/native.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  img: string = null;

  constructor(private nav: NativeService) {}

  selectImage(): void {
    this.nav.pickCamera().subscribe((result: any) => {
      this.img = 'data:image/jpeg;base64,' + result;
    });
  }
}
