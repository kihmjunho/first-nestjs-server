import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostDto: CreatePostDto): Post {
    const { title, description } = createPostDto;
    const post = new Post();
    post.title = title;
    post.description = description;
    return this.postsRepository.create(post);
  }
}
