import { IsDefined, MinLength } from 'class-validator';

export class BlogPostDto {
  @IsDefined()
  title: string;

  @IsDefined()
  @MinLength(10)
  body: string;
}
