import { NgModule } from '@angular/core'
import { Field, ObjectType } from 'type-graphql'

@NgModule()
@ObjectType()
export default class RandomImage {
  @Field()
  public url?: string
}
