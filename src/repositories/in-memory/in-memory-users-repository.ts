import { Prisma, User } from '@prisma/client'
import { IUsersRepository } from '../IUsersRepository'

export class InMemoryUsersRepository implements IUsersRepository {
  public items: User[] = []

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      created_at: new Date(),
      email: data.email,
      name: data.name,
      password_hash: data.password_hash,
    }

    this.items.push(user)

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
