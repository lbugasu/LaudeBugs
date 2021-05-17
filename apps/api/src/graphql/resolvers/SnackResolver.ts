import { Query, Resolver } from 'type-graphql'
import { getSnacks } from '../../lib/functions'
import { Snack } from '@lau-de-bugs/models'

@Resolver(of => Snack)
export default class SnackResolver {
  @Query(returns => [Snack])
  async getSnacks (): Promise<Snack[]> {
    const snacks = getSnacks()
    return snacks
  }
}
