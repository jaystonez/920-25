import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MH</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">The Mad Hatter</span>
                <span className="text-xs text-slate-400 leading-tight">Chimney Sweep</span>
              </div>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Professional chimney services with over 10 years of experience. Your safety and satisfaction are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-slate-400 hover:text-primary transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-slate-400 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/chimney-inspection-sweeping" className="text-slate-400 hover:text-primary transition-colors">
                  Chimney Sweeping
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-repairs" className="text-slate-400 hover:text-primary transition-colors">
                  Chimney Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-relining" className="text-slate-400 hover:text-primary transition-colors">
                  Chimney Relining
                </Link>
              </li>
              <li>
                <Link href="/services/waterproofing-leak-repair" className="text-slate-400 hover:text-primary transition-colors">
                  Leak Repair
                </Link>
              </li>
              <li>
                <Link href="/services/stove-fireplace-installation" className="text-slate-400 hover:text-primary transition-colors">
                  Installation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} The Mad Hatter Chimney Sweep. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
