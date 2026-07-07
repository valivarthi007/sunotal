import React from 'react';
import { Link } from 'wouter';
import tradioLogo from '@assets/tradio-logo.svg';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#101828] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/">
              <img 
                src={tradioLogo} 
                alt="Tradio Global" 
                className="h-10 cursor-pointer object-contain filter brightness-0 invert" 
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-sm leading-relaxed">
              Tradio Global is India's most trusted marketplace for refurbished and pre-owned smartphones and electronics. Tune in. Trade Better.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Tradio on Facebook" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Tradio on Twitter" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Tradio on Instagram" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Tradio on LinkedIn" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/smartphones" className="hover:text-primary transition-colors">Smartphones</Link></li>
              <li><Link href="/accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link href="/all-devices" className="hover:text-primary transition-colors">Laptops</Link></li>
              <li><Link href="/all-devices" className="hover:text-primary transition-colors">Tablets</Link></li>
              <li><Link href="/sell" className="hover:text-primary transition-colors flex items-center gap-1 text-primary">Sell to Us</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Warranty Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Return Policy</Link></li>
              <li className="flex items-start gap-2 mt-4">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>support@tradioglobal.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>1800-123-4567</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Tradio Global. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
