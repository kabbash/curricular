import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-lg">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Shopping</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/store-locator" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Rewards Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-zinc-300 hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-zinc-300 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-zinc-300 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="text-zinc-300 hover:text-white transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-lg">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-md text-sm bg-zinc-800 border-zinc-700 border text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                />
                <button className="px-4 py-2 bg-white text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
          <p>&copy; 2024 EcoShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

