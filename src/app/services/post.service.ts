import { Injectable } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private dbService: DbService) {}

  getPosts(city: string): any {
    return this.dbService.getData(`posts/${city}`).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
