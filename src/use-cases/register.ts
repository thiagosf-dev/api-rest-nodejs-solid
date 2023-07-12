import { IUsersRepository } from '@/repositories/IUsersRepository'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  email: string
  name: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, name, password }: RegisterUseCaseRequest) {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error(`❌ E-mail already exixts.`)
    }

    const passwordHash = await hash(password, 6)

    await this.usersRepository.create({
      email,
      name,
      password_hash: passwordHash,
    })
  }
}
