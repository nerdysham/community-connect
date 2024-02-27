import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgIf],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  @Input() post!: Post;
}
