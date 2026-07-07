import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, ShoppingCart, Truck, ShieldCheck, CheckCircle2, RotateCcw, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Nav />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section>
          <HeroCarousel />
        </section>

        {/* Popular Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
              <h2 className="text-3xl md:text-4xl font-black text-[#101828]">Popular Products</h2>
              <Link href="/all-devices">
                <Button variant="outline" className="rounded-full border-gray-300 font-bold px-6">
                  See All Devices
                </Button>
              </Link>
            </div>

            <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-8 bg-gray-100 p-1 rounded-full inline-flex">
                <TabsTrigger value="All" className="rounded-full px-6 font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">All</TabsTrigger>
                <TabsTrigger value="Smartphones" className="rounded-full px-6 font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Smartphones</TabsTrigger>
                <TabsTrigger value="Accessories" className="rounded-full px-6 font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Accessories</TabsTrigger>
              </TabsList>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {filteredProducts.slice(0, 10).map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </Tabs>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-[#F7F7F7]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#101828] mb-4">How It Works?</h2>
            <p className="text-muted-foreground text-lg mb-16">Get started in 3 simple steps</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
              {/* Lines connecting steps on desktop */}
              <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gray-200 z-0"></div>

              {[
                { icon: Search, title: "Browse Listings", desc: "Find your desired device from our verified catalog." },
                { icon: ShoppingCart, title: "Sign In and Place Order", desc: "Secure checkout with multiple payment options." },
                { icon: Truck, title: "Track Delivery", desc: "Get real-time updates until it reaches your door." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-[#F7F7F7] mb-6">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Tradio */}
        <section className="py-16 md:py-24 bg-[#FFF5F2]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#101828] mb-4">Why Choose Tradio</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're committed to bringing you the best quality pre-owned devices with total peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Verified Devices", desc: "Every device undergoes a 40+ point quality check." },
                { icon: CheckCircle2, title: "Best Prices", desc: "Unbeatable deals on premium refurbished tech." },
                { icon: RotateCcw, title: "Easy Returns", desc: "Hassle-free 7-day replacement policy." },
                { icon: Zap, title: "Fast Delivery", desc: "Express shipping across major Indian cities." }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto bg-[#FFF5F2] text-primary rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#101828] mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Newsletter */}
        <section className="bg-[#101828] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+')]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Get the Tradio App</h2>
              <p className="text-gray-400 text-lg mb-10">
                Experience seamless trading, exclusive app-only discounts, and real-time order tracking. Download now and tune in to better trades.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white hover:bg-gray-100 text-[#101828] rounded-full px-8 h-14 text-lg font-bold">
                  Download on App Store
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg font-bold">
                  Get it on Google Play
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
