'use server'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from './utils/prisma'
import { User } from '@prisma/client'
import { requireUser } from './utils/requiredUser'
import { folderSchema } from './utils/zodSchemas'
import { z } from 'zod'

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

export async function createFolder(data: z.infer<typeof folderSchema>) {
  const user = await requireUser();
  if (!user?.id) {
    return redirect('/');
  }

  // Validera data med Zod
  const validatedData = folderSchema.parse(data); // Detta kastar ett fel om datan inte är korrekt

  // Skapa folder i databasen
  await prisma.folder.create({
    data: {
      name: validatedData.name,
      description: validatedData.description,
      userId: user.id, // Användarens ID från Prisma
      category: validatedData.category,
      coverImage: validatedData.coverImage,
    },
  });
}


