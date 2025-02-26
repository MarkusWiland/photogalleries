import { auth } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export async function requireUser() {
  try {
    const session = await auth();
    
    if (!session?.userId) {
      return null; // Returnera null istället för att redirecta
    }

    // Hämta endast nödvändiga fält från databasen
    const user = await prisma.user.findUnique({
      where: { clerkId: session.userId },
      select: { id: true, clerkId: true }, // Endast viktiga fält
    });

    return user || null; // Om användaren inte finns, returnera null
  } catch (error) {
    console.error("Fel vid autentisering:", error);
    return null; // Returnera null vid fel
  }
}
