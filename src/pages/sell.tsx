import React from 'react';
import { Header } from '@/components/layout/header';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { CheckCircle2, ShieldCheck, Zap, Truck, Smartphone, RefreshCw, HandCoins } from 'lucide-react';

export default function Sell() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <Nav />
      
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="bg-[#101828] text-white pt-20 pb-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute w-[800px] h-[800px] bg-primary rounded-full blur-3xl -top-[400px] -right-[200px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Sell Your Device,<br />
                <span className="text-primary">Get Instant Cash.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                Upgrade your tech without the hassle. Get a free quote in seconds, ship it for free, and get paid instantly.
              </p>
              
              {/* Quick Quote Form inline */}
              <div className="bg-white p-4 md:p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl shadow-xl">
                <div className="w-full md:flex-1">
                  <Select>
                    <SelectTrigger className="w-full h-12 text-secondary bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="xiaomi">Xiaomi</SelectItem>
                      <SelectItem value="oneplus">OnePlus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:flex-1">
                  <Select>
                    <SelectTrigger className="w-full h-12 text-secondary bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iphone14">iPhone 14 Pro</SelectItem>
                      <SelectItem value="iphone13">iPhone 13</SelectItem>
                      <SelectItem value="s23">Galaxy S23</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full md:w-auto h-12 px-8 rounded-full font-bold text-lg whitespace-nowrap">
                  Get Exact Value
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-12 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary h-5 w-5" />
                <span>10,000+ Devices Sold</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-primary h-5 w-5" />
                <span>Same-day Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="text-primary h-5 w-5" />
                <span>Free Pickup</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">4 Steps to Instant Cash</h2>
            <p className="text-gray-500 mb-16 text-lg">The easiest way to sell your old electronics</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-1 bg-gray-100 -z-10"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-primary shadow-sm mb-6 z-10">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">1. Get a Quote</h3>
                <p className="text-gray-500 text-sm">Tell us about your device and its condition to get an instant estimated value.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-primary shadow-sm mb-6 z-10">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">2. Ship for Free</h3>
                <p className="text-gray-500 text-sm">We provide a free prepaid shipping label or schedule a free home pickup.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-primary shadow-sm mb-6 z-10">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">3. Device Inspection</h3>
                <p className="text-gray-500 text-sm">Our experts verify the condition of your device upon arrival.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-primary shadow-sm mb-6 z-10">
                  <HandCoins className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">4. Get Paid</h3>
                <p className="text-gray-500 text-sm">Receive your money instantly via UPI, Bank Transfer, or Store Credit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-black text-center text-secondary mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-2">How is the value of my device determined?</h4>
                <p className="text-gray-600">The value depends on the model, brand, age, and physical/functional condition of the device. Market demand also plays a role in the final quote.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-2">Do I need to include accessories?</h4>
                <p className="text-gray-600">While original accessories (charger, box, earphones) can slightly increase your device's value, they are not mandatory to sell your device to us.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-2">What if the actual condition differs from my description?</h4>
                <p className="text-gray-600">If our experts find a discrepancy during inspection, we will provide a revised quote. You can either accept the new quote or have your device returned to you for free.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
