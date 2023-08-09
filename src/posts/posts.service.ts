import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const post = this.postsRepository.create(createPostDto);
    return await this.postsRepository.save(post);
  }

  async findAll() {
    return await this.postsRepository.find();
  }

  async findOne(id: number) {
    const post = await this.postsRepository.findOneBy({ id });
    if (!post)
      throw new BadRequestException(`El post con el id ${id} no existe`);
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
