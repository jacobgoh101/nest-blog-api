import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostEntity } from './blog-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPostEntity])],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class BlogPostModule {}
