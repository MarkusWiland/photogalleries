'use server'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from './utils/prisma'
import { User } from '@prisma/client'
import { requireUser } from './utils/requiredUser'

export async function createUser(data: User) {
  try {
    // Kolla om användaren redan finns
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: data.clerkId },
    })

    if (existingUser) {
      return { message: 'User already exists' }
    }

    // Skapa användaren om den inte finns
    const newUser = await prisma.user.create({
      data: {
        clerkId: data.clerkId,
        email: data.email,
        name: data.name,
        image: data.image,
      },
    })

    return { user: newUser }
  } catch (error) {
    console.error('Error creating user:', error)
    return { error }
  }
}

export async function createFolder() {
  const user = await requireUser()
  if (!user?.id) {
    return redirect('/')
  }

  await prisma.folder.create({
    data: {
      name: 'hej',
      description: 'cool',
      userId: user?.id, // Här använder vi Prisma-användarens ID
    },
  })
}


