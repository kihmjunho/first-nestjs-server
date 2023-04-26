import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsRepository {
  private static posts: Post[] = [];
  private static currentId = 0;

  create(post: Post): Post {
    post.id = ++PostsRepository.currentId;
    PostsRepository.posts.push(post);
    return post;
    console.log(PostsRepository.posts);
  }
}
