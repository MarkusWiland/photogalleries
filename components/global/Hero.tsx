import React from "react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { motion } from "framer-motion";
import Image from "next/image";

export default async function Hero() {
  const user = await auth();

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-12 w-full h-full">
        {/* Textdel (vänster sida) */}
        <div className="col-span-7 flex flex-col justify-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tighter">
            Skapa och dela dina egna fotogallerier
          </h1>
          <p className="text-lg mt-4 mb-6 text-gray-300">
            Vår plattform gör det enkelt att organisera och dela dina bilder.
            Med kraftfulla verktyg och AI-genererade taggar kan du skapa
            fantastiska gallerier på nolltid.
          </p>

          {/* Knappar */}
          <div className="flex items-center gap-4">
            <Button variant="default">
              {user ? "Gå till ditt galleri" : "Börja här"}
            </Button>
            <Button variant="secondary">Läs mer här</Button>
          </div>
        </div>

        {/* Bilddel (höger sida) */}
        <div className="col-span-5 relative h-full w-full">
          <Image
            src="/background.jpg"
            alt="Hero Image"
            fill
            className="object-cover  shadow-lg size-full"
          />
        </div>
      </div>
    </div>
  );
}
