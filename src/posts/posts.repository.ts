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

  updatePost(id: number, post: Post): Post {
    let updatePost: Post;
    const { title, description } = post;
    PostsRepository.posts.map((item) => {
      if (id === item.id) {
        item.title = title ? title : item.title;
        item.description = description ? description : item.description;
        updatePost = item;
      }
    });
    return updatePost;
  }

  deletePost(id: number): string {
    PostsRepository.posts.map((item, index) => {
      if (id === item.id) {
        PostsRepository.posts.splice(index, 1);
      }
    });
    return `this post has been deleted`;
  }
}
