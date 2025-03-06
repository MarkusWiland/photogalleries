'use client'
import { motion } from "framer-motion";

export default function BillBoardGallery() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl px-6"
      >
        <h1 className="text-6xl font-extrabold tracking-tighter">
          Skapa ditt galleri
        </h1>
        <p className="text-lg mt-4 text-gray-300 tracking-tight">
          Upptäck kraften i att organisera och dela dina foton enkelt och
          effektivt.
        </p>
      </motion.div>
    </div>
  );
}
