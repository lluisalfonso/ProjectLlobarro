import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../../../models/post';

import {PostService} from '../../../services/post.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getPost();
    this.resetForm();
  }

  onSubmit(postForm: NgForm) {
    this.postService.insertPost(postForm.value);
    // this.resetForm(postForm);
  }

  resetForm(postForm?: NgForm) {
    if (postForm != null) {
        postForm.reset();
        this.postService.selectedPost = new Post();
    }
  }
}
