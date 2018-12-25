import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostDto } from './blog-post.dto';
import { ValidationError } from 'class-validator';

@UsePipes(
  new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => {
      return new BadRequestException({
        statusCode: 400,
        error: 'Bad Request',
        errors: errors
          .map(({ constraints }) => (Object as any).values(constraints))
          .reduce((accumulator, currentValue) => {
            return [...accumulator, ...currentValue];
          }),
      });
    },
  }),
)
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
