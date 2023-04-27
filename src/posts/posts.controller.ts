import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDetailDto } from './dto/post-detail.dto';
import { Post as Detail } from './post.entity';

@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get(':id')
  getPostDetail(@Param() postDetailDto: PostDetailDto): Detail {
    const parseId = parseInt(postDetailDto.id);
    return this.postsService.postDetail(parseId);
  }
}
