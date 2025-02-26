import { z } from "zod";


export const folderSchema = z.object({
  name: z.string().min(1, "Namnet är obligatoriskt"), // Kräver minst ett tecken
  description: z.string().optional(), // Valfritt fält
  category: z.enum(["NATURE", "PORTRAIT", "CITYSCAPE", "ABSTRACT", "OTHER"]).optional(), // Valfri kategori
  coverImage: z.string().optional(), // Valfritt fält för huvudbild
});
