import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  postsAll() {
    return this.postsRepository.postsAll();
  }

  create(createPostDto: CreatePostDto): Post {
    const { title, description } = createPostDto;
    const post = new Post();
    post.title = title;
    post.description = description;
    return this.postsRepository.create(post);
  }

  postDetail(id: number): Post {
    return this.postsRepository.postDetail(id);
  }

  updatePost(id: number, createPostDto: CreatePostDto): Post {
    const { title, description } = createPostDto;
    const post = new Post();
    post.title = title;
    post.description = description;
    return this.postsRepository.updatePost(id, post);
  }
}
