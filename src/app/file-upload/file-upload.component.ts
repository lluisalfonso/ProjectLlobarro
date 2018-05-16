import { Component, OnInit } from '@angular/core';
import { AngularFireStorage,AngularFireUploadTask} from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  //MAIN TASK 
  task: AngularFireUploadTask;

  //Progress monitoring

  percentage : Observable<number>;
  snapshot: Observable<any>;

  downloadURL : Observable<string>;

  isHovering : boolean;
  

  constructor(private storage : AngularFireStorage) {}

  toggleHover(event: boolean){
      this.isHovering = event;
  }


  startUpload(event : FileList)  {
    const file = event.item(0)

    if(file.type.split('/')[0]!== 'image'){
      console.error('unsupported file type :(')
      return;
    }

    const path = 'test/${new Date().getTime()}_${file.name}';

    const customMetadata = {app: 'My anfularFire-powered PWA'};

    this.task = this.storage.upload(path,file,{customMetadata})

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();


    this.downloadURL =  this.task.downloadURL();
  }
  isActive(snapshot){
    return snapshot.state == 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }  
  ngOnInit() {
  }

}
