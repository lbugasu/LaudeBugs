import { Query, Resolver } from 'type-graphql'
import { getRandomImage } from '../../lib/functions'
import { RandomImage } from '@lau-de-bugs/models'

@Resolver(of => RandomImage)
export default class RandomImageResolver {
  @Query(returns => RandomImage)
  async getRandomImage (): Promise<RandomImage> {
    const image = await getRandomImage()
    return { url: image }
  }
}
