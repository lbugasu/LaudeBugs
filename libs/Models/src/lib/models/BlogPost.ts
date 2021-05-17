import { NgModule } from '@angular/core'
import { Field, ObjectType } from 'type-graphql'

@NgModule()
@ObjectType()
export default class BlogPost {
  @Field()
  slug?: string

  @Field()
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field()
  body?: string

  @Field()
  date?: string

  @Field()
  featuredImage?: string

  @Field(type => [String])
  section?: [string]

  @Field(type => [String])
  tags?: [string]

  // @Field((type) => [Comment])
  // comments?: [Comment];

  @Field()
  likes?: number

  @Field({ nullable: true })
  likeLevel?: number

  @Field()
  type?: string
}
