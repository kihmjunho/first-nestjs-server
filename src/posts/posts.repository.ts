import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsRepository {
  private static posts: Post[] = [];
  private static currentId = 0;

  postsAll() {
    return PostsRepository.posts;
  }

  create(post: Post): Post {
    post.id = ++PostsRepository.currentId;
    PostsRepository.posts.push(post);
    return post;
  }

  postDetail(id: number): Post {
    const post = PostsRepository.posts.find((post) => post.id === id);
    return post;
  }
}
