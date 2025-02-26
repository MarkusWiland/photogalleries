import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { auth } from '@clerk/nextjs/server'

export default async function Hero() {

  const user = await auth()
  console.log("user", user)
  return (
    <div className="min-h-screen">
      <div className="flex flex-col space-y-6 items-center justify-center">
        <h1 className="text-5xl font-bold mt-32 tracking-tighter">
          Skapa och dela dina egna fotogallerier
        </h1>
        <p className="text-sm max-w-lg text-balance text-muted-foreground tracking-tight">
          Vår plattform gör det enkelt att organisera och dela dina bilder. Med
          kraftfulla verktyg och AI-genererade taggar kan du skapa fantastiska
          gallerier på nolltid.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="default">Börja här</Button>
          <Button variant="secondary">Läs mer här</Button>
        </div>
      </div>
      <div>
        <Image src="" alt="" />
      </div>
    </div>
  )
}
