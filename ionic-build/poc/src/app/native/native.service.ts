import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NativeService {
  options: CameraOptions;

  constructor(private camera: Camera) {
    this.options = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }

  pickCamera(): Observable<any> {

    // return of(1);
    let msg: any = null;
    return from(new Promise((resolve, reject) => {
      this.camera.getPicture(this.options).then((imageData) => {
        // Do something with the new photo
          console.log('imageData:', imageData);
          msg = imageData;
          resolve(msg);
        }, (err) => {
          // Handle error
          console.log('Camera issue: ' + err);
          msg = err;
          reject(msg);
        });
      })
    );
  }
}
