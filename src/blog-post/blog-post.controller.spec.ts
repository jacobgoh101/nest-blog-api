import { Test, TestingModule } from '@nestjs/testing';
import { BlogPostController } from './blog-post.controller';

describe('BlogPost Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [BlogPostController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BlogPostController = module.get<BlogPostController>(BlogPostController);
    expect(controller).toBeDefined();
  });
});
