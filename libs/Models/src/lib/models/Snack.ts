import { NgModule } from '@angular/core'
import { Field, ObjectType } from 'type-graphql'

@NgModule()
@ObjectType()
export default class Snack {
  @Field()
  public body?: string

  @Field()
  public fileName?: string
}
