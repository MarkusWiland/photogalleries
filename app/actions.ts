'use server'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { prisma } from './utils/prisma'

async function createUser() {}

export async function createFolder() {
  const user = await auth()
  if (!user.userId) {
    redirect('/')
  }

  await prisma.folder.create({
    data: {
      name: 'hej',
      description: 'cool',
      userId: user.userId, // Spara userId här
    },
  })
}
