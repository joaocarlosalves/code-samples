import { Component } from '@angular/core'
import { PostService } from 'src/app/services/posts.service'

@Component({
  selector: 'comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent {
  title: string = '';
  author: string = '';
  link: string = '';
  valid: boolean = false;
  post: any = {};

  constructor(private postService: PostService) { }

  validPost(){
    if(
      this.title !== '' &&
      this.author !== '' &&
      this.link !== ''
    ) this.valid = true;
    else this.valid = false;
  }

  submitPost() {
    this.post = {
      title: this.title,
      author: this.author,
      link: this.link
    }

    this.postService.insertPost(this.post);
  }
}
