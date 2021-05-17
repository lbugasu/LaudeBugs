import { Mutation, Resolver } from 'type-graphql'
import { UserModel, User, Note, NoteModel } from '@lau-de-bugs/models'

class NoteInput {
  name?: string
  email?: string
  note?: string
  subject?: string
}
@Resolver(of => Note)
export default class NoteResolver {
  @Mutation()
  async createNote (note: NoteInput): Promise<Note | null> {
    try {
      let usr: User | any = await UserModel.findOne({ email: note.email })
      if (!usr) {
        usr = new UserModel({ name: note.name, email: note.email })
      }
      const newNote = new NoteModel({
        subject: note.subject,
        note: note.note,
        user: usr._id
      })
      usr.notes.push(newNote._id)

      usr.save().then(() => {
        newNote.save()
      })
      return newNote
    } catch (error) {
      return null
    }
  }
}
