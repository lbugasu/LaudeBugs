import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import Post from './models/Post'
import BlogPost from './models/BlogPost'
import Note from './models/Note'
import RandomImage from './models/RandomImage'
import Snack from './models/Snack'
import User from './models/User'

@NgModule({
  imports: [CommonModule, BlogPost, User, Snack, RandomImage, Note, Post],
  exports: [BlogPost, User, Snack, RandomImage, Note, Post]
})
export class ModelsModule {}
