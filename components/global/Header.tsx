'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isAuthenticated = false // TODO: Byt ut mot din auth-logik
  const isAdmin = false // TODO: Lägg till admin-logik

  const navLinks = isAuthenticated
    ? [
        { name: 'Mina gallerier', href: '/my-galleries' },
        { name: 'Utforska', href: '/explore' },
        { name: 'Uppladdningar', href: '/upload' },
        { name: 'Inställningar', href: '/settings' },
      ]
    : [
        { name: 'Hem', href: '/' },
        { name: 'Om oss', href: '/about' },
        { name: 'Produkter', href: '/pricing' },
        { name: 'Kontakta oss', href: '/contact' },
      ]

  if (isAdmin) {
    navLinks.push({ name: 'Admin', href: '/admin' })
  }

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          FotoGallery
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 ${
                pathname === link.href ? 'font-bold text-blue-600' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {isAuthenticated ? (
            <Button variant="outline">Logga ut</Button>
          ) : (
            <>
              <SignedOut>
                <Button variant="default">
                  <SignInButton mode="modal">Logga in</SignInButton>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button>
                  <Link href="portfolio">Min portfolio</Link>
                </Button>
                <UserButton />
              </SignedIn>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-gray-700 dark:text-gray-300 hover:text-blue-500 ${
                pathname === link.href ? 'font-bold text-blue-600' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Auth Buttons */}
          <div className="mt-4">
            {isAuthenticated ? (
              <button className="bg-red-500 text-white w-full py-2 rounded-md">
                Logga ut
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  Logga in
                </Link>
                <Link
                  href="/register"
                  className="block bg-blue-500 text-white text-center py-2 rounded-md mt-2"
                >
                  Registrera dig
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
