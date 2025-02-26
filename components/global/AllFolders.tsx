import { prisma } from '@/app/utils/prisma';
import { requireUser } from '@/app/utils/requiredUser';
import { redirect } from 'next/navigation';
import React from 'react';

async function getUserFolders() {
  try {
    const session = await requireUser(); // Endast inloggade användare kan köra denna funktion

    if (!session?.id) {
      console.error("Ingen giltig session hittades.");
      return [];
    }

    const folders = await prisma.folder.findMany({
      where: { userId: session.id }, // Filtrera på den inloggade användaren
      select: {
        id: true,
        name: true,
        description: true,
      },
    });

    return folders ?? []; // Säkerställ att vi alltid returnerar en array
  } catch (error) {
    console.error("Fel vid hämtning av foldrar:", error);
    return []; // Returnera en tom lista istället för att krascha
  }
}

export default async function AllFolders() {


  const folders = await getUserFolders();


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mina Mappar</h2>
      {folders.length === 0 ? (
        <p>Du har inga mappar ännu.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <div key={folder.id} className="p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold">{folder.name}</h3>
              {folder.description && <p className="text-sm text-gray-600">{folder.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
