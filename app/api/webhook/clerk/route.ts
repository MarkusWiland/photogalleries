import { prisma } from '@/app/utils/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { id, email_addresses, first_name, image_url } = body?.data

    const email = email_addresses[0]?.email_address

    if (!id || !email) {
      return new NextResponse('Invalid data', { status: 400 })
    }

    await prisma.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        name: first_name,
        image: image_url,
      },
      create: {
        clerkId: id,
        email,
        name: first_name || '',
        image: image_url || '',
        role: 'USER',
        subscriptions: {
          create: {
            plan: 'FREE',
          },
        },
      },
    })
    

    return new NextResponse('User updated', { status: 200 })
  } catch (error) {
    console.error('Error in Clerk webhook:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
