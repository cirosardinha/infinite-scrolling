import { Component, HostListener, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { MOCK_POST } from '../../../mocks/mock-post';
@Component({
  selector: 'app-feed',
  imports: [Post],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed implements OnInit {
  loading: boolean = false;
  posts!: IPost[];
  postsToDisplay!: IPost[];
  batchSize: number = 5;
  endOfFeed: boolean = false;
  endOfFeedMessage?: string;

  ngOnInit() {
    this.posts = MOCK_POST;
    this.postsToDisplay = this.posts.slice(0, this.batchSize);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !this.loading
    ) {
      this.loading = true;

      setTimeout(() => {
        const startIndex = this.postsToDisplay.length;
        const endIndex = startIndex + this.batchSize;

        const newPosts = this.posts.slice(startIndex, endIndex);
        this.postsToDisplay = [...this.postsToDisplay, ...newPosts];

        this.loading = false;

        if (this.postsToDisplay.length >= this.posts.length) {
          this.endOfFeed = true;
          this.endOfFeedMessage = 'No more posts to display';
        }
      }, 2000);
    }
  }
}
