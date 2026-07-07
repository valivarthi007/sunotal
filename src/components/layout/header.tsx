import React from 'react';
import { Link } from 'wouter';
import { Search, MapPin, ChevronDown, User, ShoppingCart, Headphones, Store, Menu } from 'lucide-react';
import tradioLogo from '@assets/tradio-logo.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo and Tagline */}
        <div className="flex flex-col flex-shrink-0">
          <Link href="/">
            <img src={tradioLogo} alt="Tradio Global" className="h-8 md:h-10 cursor-pointer object-contain" />
          </Link>
          <span className="text-[10px] md:text-xs text-muted-foreground font-medium mt-0.5 tracking-wide uppercase">
            Tune in. Trade Better
          </span>
        </div>

        {/* Location Picker */}
        <div className="hidden lg:flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer transition-colors">
          <MapPin className="h-5 w-5 text-primary" />
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Deliver to</span>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center gap-1 text-sm font-bold text-secondary">
                  <span>Select State/City</span>
                  <ChevronDown className="h-3 w-3" />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select your location</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {['Maharashtra', 'Delhi', 'Karnataka', 'Gujarat', 'Tamil Nadu', 'Telangana'].map(state => (
                    <Button key={state} variant="outline" className="justify-start">{state}</Button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <div className="relative w-full flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search by Product Name, Brand, or SKU" 
              className="w-full pl-12 pr-4 h-12 rounded-full bg-gray-50 border-gray-200 focus-visible:ring-primary focus-visible:ring-offset-0 text-base"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-6 flex-shrink-0">
          <div className="hidden md:flex">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-11">
              Login / Sign Up
            </Button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <Search className="h-6 w-6 text-secondary" />
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="h-6 w-6 text-secondary" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <Link href="/all-devices" className="text-lg font-medium">All Devices</Link>
                  <Link href="/smartphones" className="text-lg font-medium">Smartphones</Link>
                  <Link href="/accessories" className="text-lg font-medium">Accessories</Link>
                  <Link href="/sell" className="text-lg font-medium text-primary flex items-center gap-2">
                    <Store className="h-5 w-5" /> Sell to Tradio
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
