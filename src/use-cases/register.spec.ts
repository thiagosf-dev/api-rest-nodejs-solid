import { compare } from 'bcryptjs'
import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

describe('Register Use Casa', async () => {
  it('should be able to register', async () => {
    const registerUseCase = new RegisterUseCase(new InMemoryUsersRepository())

    const { user } = await registerUseCase.execute({
      email: 'test@email.com',
      name: 'Teste Name',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase(new InMemoryUsersRepository())

    const { user } = await registerUseCase.execute({
      email: 'test@email.com',
      name: 'Teste Name',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same e-mail twice', async () => {
    const registerUseCase = new RegisterUseCase(new InMemoryUsersRepository())

    const email = 'teste@email.com'

    await registerUseCase.execute({
      email,
      name: 'Teste Name',
      password: '123456',
    })

    await expect(() =>
      registerUseCase.execute({
        email,
        name: 'Teste Name',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
