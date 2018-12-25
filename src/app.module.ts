import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BlogPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
