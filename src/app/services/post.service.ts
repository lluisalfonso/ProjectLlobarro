import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { Post } from '../models/post';
import { AuthService } from '../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: AngularFireList<any>;
  selectedPost: Post = new Post();

  constructor(private firebase: AngularFireDatabase,
              public authService: AuthService,
              public toastr: ToastrService
  ) { }

  getPost() {
    return this.postList = this.firebase.list('posts');
  }

  insertPost(post: Post) {
    if (this.authService.currentUserId() !== '') {
        this.postList.push({
            idUsuari: this.authService.currentUserId(),
            titol: post.titol,
            cos: post.cos,
            link: ''
        });
        this.toastr.success('Operació realitzada', 'Crear Post');
    } else {
        this.toastr.error('Operació no realitzada', 'Crear Post');
    }
  }

  updatePost(post: Post) {
    this.postList.update(post.$key, {
      titol: post.titol,
      cos: post.cos,
      link: post.link
    });
  }

  deletePost($key: string) {
    this.postList.remove($key);
  }
}
