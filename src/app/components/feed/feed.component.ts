import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PostCardComponent } from 'src/app/components/post-card/post-card.component';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostCardComponent, NgFor],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.postService.getPosts('fremont').then((posts: any) => {
      console.log(posts);

      let keys = Object.keys(posts);
      let postInfos: Post[] = [];

      for (let key in keys) {
        postInfos.push(posts[key]);
      }

      this.posts = postInfos;
    });
  }
}
