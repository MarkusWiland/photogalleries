import React from 'react'

export default function BillBoardGallery() {
  return (
    <div className="bg-red-200 p-32 flex items-center justify-center">
      <div className="flex flex-col space-y-4 items-center justify-center">
        <h1 className="text-5xl font-bold tracking-tighter">
          Skapa ditt galleri
        </h1>
        <p className="text-md text-center text-muted-foreground text-balance max-w-md tracking-tight">
          Upptäck kraften i att organisera och dela dina foton enkelt och
          effektivt.
        </p>
      </div>
    </div>
  )
}
