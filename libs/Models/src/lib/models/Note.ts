import { NgModule } from '@angular/core'
import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import User from './User'

@NgModule()
@ObjectType()
export default class Note {
  @Field()
  @prop()
  public subject?: string

  @Field()
  @prop()
  public note?: string

  @Field(type => User)
  @prop({ ref: 'User' })
  public user?: Ref<User>
}

export const NoteModel = getModelForClass(Note)
