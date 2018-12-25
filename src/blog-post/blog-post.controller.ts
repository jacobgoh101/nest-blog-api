import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostDto } from './blog-post.dto';

@Controller('blog-post')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Get()
  showAll() {
    return this.blogPostService.showAll();
  }

  @Get(':id')
  show(@Param() params) {
    const { id } = params;
    return this.blogPostService.show(id);
  }

  @Post()
  create(@Body() data: BlogPostDto) {
    return this.blogPostService.create(data);
  }

  @Put(':id')
  update(@Param() params, @Body() data: BlogPostDto) {
    const { id } = params;
    return this.blogPostService.update(id, data);
  }

  @Delete(':id')
  delete(@Param() params) {
    const { id } = params;
    return this.blogPostService.delete(id);
  }
}
