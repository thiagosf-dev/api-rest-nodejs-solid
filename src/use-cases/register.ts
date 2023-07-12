import { PrismaUsersRepository } from './../repositories/prisma-users-repository'
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  email: string
  name: string
  password: string
}

export async function registerUseCase({
  email,
  name,
  password,
}: RegisterUseCaseRequest) {
  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithSameEmail) {
    throw new Error(`❌ E-mail already exixts.`)
  }

  const passwordHash = await hash(password, 6)

  const prismaUsersRepository = new PrismaUsersRepository()
  await prismaUsersRepository.create({
    email,
    name,
    password_hash: passwordHash,
  })
}
