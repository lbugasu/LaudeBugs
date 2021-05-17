import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import Comment from './Comment'
import Note from './Note'
import { NgModule } from '@angular/core'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const emailValidator = require('email-validator')

@NgModule()
@ObjectType()
export default class User {
  @Field()
  @prop()
  public name?: string

  @Field()
  @prop({
    unique: true,
    validate: {
      validator: emailValidator.validate,
      message: props => `${props.value} is not a valid email address`
    }
  })
  public email?: string

  @Field()
  @prop()
  public sneekpeeks?: boolean

  @Field()
  @prop()
  public newposts?: boolean

  @Field(type => [Note])
  @prop({ ref: 'Note', default: [] })
  public notes?: Ref<Note>[]

  @Field(type => [Comment])
  @prop({ ref: 'Comment', default: [] })
  comments?: Ref<Comment>[]
}

export const UserModel = getModelForClass(User)
