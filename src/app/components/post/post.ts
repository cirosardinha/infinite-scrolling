import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faThumbsUp,
  faComment,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  imports: [FontAwesomeModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  likePost(e: any) {
    e.liked = !e.liked;
  }
  @Input() post!: IPost;

  constructor() {}

  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faSmile = faSmile;
}
