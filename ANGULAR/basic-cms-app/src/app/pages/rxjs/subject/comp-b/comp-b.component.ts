import { Component } from '@angular/core'
import { Subscription } from 'rxjs'
import { PostService } from 'src/app/services/posts.service'

@Component({
  selector: 'comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent {
  subscription: Subscription;
  posts: any;

  constructor(private postService: PostService) { }

  ngOnInit() { this.init() }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

  init() {
    this.postService.retrievePosts();
    this.getPosts();

  }

  getPosts() {
    this.postService.getPosts().subscribe((posts: any) => {
      this.posts = posts;
      console.log(this.posts)
    });
  }
}
