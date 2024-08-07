import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Post } from './models/post.model';

@Resolver(() => Post)
export class PostResolver {
    constructor(private prisma: PrismaService) { }
    
    @Query(() => [Post])
    async getPosts() {
        return this.prisma.post.findMany();
    }

    @Mutation(() => Post)
    async createPost(
        @Args('title') title: string,
        @Args('content') content: string,
    ) {
        return this.prisma.post.create({data: {title, content,}})
    }
}