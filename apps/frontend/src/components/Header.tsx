"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            EcoShop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-zinc-200 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-sm font-medium text-zinc-200 hover:text-white transition-colors">
              Categories
            </Link>
            <Link to="/deals" className="text-sm font-medium text-zinc-200 hover:text-white transition-colors">
              Deals
            </Link>
            <Link to="/new-arrivals" className="text-sm font-medium text-zinc-200 hover:text-white transition-colors">
              New Arrivals
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full text-xs flex items-center justify-center">
                2
              </span>
            </button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-zinc-800 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-zinc-900 shadow-lg transform transition-transform duration-200 ease-in-out">
            <div className="p-4">
              <button
                className="p-2 hover:bg-zinc-800 rounded-full transition-colors mb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-sm font-medium text-zinc-200 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/categories"
                  className="text-sm font-medium text-zinc-200 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  to="/deals"
                  className="text-sm font-medium text-zinc-200 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Deals
                </Link>
                <Link
                  to="/new-arrivals"
                  className="text-sm font-medium text-zinc-200 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  New Arrivals
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

