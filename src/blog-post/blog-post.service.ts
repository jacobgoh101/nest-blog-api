import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPostEntity } from './blog-post.entity';
import { Repository } from 'typeorm';
import { BlogPostDto } from './blog-post.dto';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectRepository(BlogPostEntity)
    private readonly blogPostRepository: Repository<BlogPostEntity>,
  ) {}

  async showAll() {
    return await this.blogPostRepository.find();
  }

  async show(id: number) {
    const blogPost = await this.blogPostRepository.findOne({ id });
    if (!blogPost) {
      return new NotFoundException();
    }
    return blogPost;
  }

  async create(data: BlogPostDto) {
    const blogPost = await this.blogPostRepository.create(data);
    await this.blogPostRepository.save(blogPost);
    return blogPost;
  }

  async update(id: number, data: BlogPostDto) {
    const { title, body } = data;
    const blogPost: BlogPostEntity = await this.blogPostRepository.findOne({
      id,
    });
    if (!blogPost) {
      return new BadRequestException(`Invalid ID`);
    }
    blogPost.title = title;
    blogPost.body = body;
    await this.blogPostRepository.save(blogPost);
    return blogPost;
  }

  async delete(id: number) {
    const blogPost: BlogPostEntity = await this.blogPostRepository.findOne({
      id,
    });
    if (!blogPost) {
      return new BadRequestException(`Invalid ID`);
    }
    await this.blogPostRepository.delete({ id });
    return blogPost;
  }
}
