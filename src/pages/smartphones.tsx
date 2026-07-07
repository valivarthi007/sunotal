import React, { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function Smartphones() {
  const [priceRange, setPriceRange] = useState([10000, 150000]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filter only smartphones
  const smartphones = products.filter(p => p.category === 'Smartphones');

  const brands = ['Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Realme'];
  const ramOptions = ['4GB', '6GB', '8GB', '12GB', '16GB'];
  const storageOptions = ['64GB', '128GB', '256GB', '512GB'];
  const conditionOptions = ['Like New', 'Good', 'Fair'];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <Nav />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        
        {/* Breadcrumbs & Title */}
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-2">Home / All Devices / Smartphones</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-3xl md:text-4xl font-black text-[#101828]">Smartphones</h1>
            <p className="text-gray-500">{smartphones.length} items found</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <Button 
            variant="outline" 
            className="lg:hidden w-full flex items-center justify-center gap-2 mb-4"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter className="h-4 w-4" />
            {isMobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>

          {/* Sidebar Filters */}
          <aside className={`w-full lg:w-1/4 lg:block ${isMobileFiltersOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-36">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-secondary">Filters</h2>
              </div>

              <div className="space-y-6">
                
                {/* Price Range */}
                <div>
                  <h3 className="font-bold text-secondary mb-4">Price Range</h3>
                  <Slider
                    defaultValue={[10000, 150000]}
                    max={150000}
                    min={5000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm font-medium text-gray-600">
                    <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                    <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Brands */}
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between font-bold text-secondary py-2">
                    Brands <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3 pt-2">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <label htmlFor={`brand-${brand}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Storage */}
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between font-bold text-secondary py-2 border-t mt-4">
                    Storage <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="grid grid-cols-2 gap-2 pt-2">
                    {storageOptions.map(opt => (
                      <div key={opt} className="flex items-center space-x-2">
                        <Checkbox id={`storage-${opt}`} />
                        <label htmlFor={`storage-${opt}`} className="text-sm font-medium leading-none">
                          {opt}
                        </label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Condition */}
                <Collapsible defaultOpen>
                  <CollapsibleTrigger className="flex w-full items-center justify-between font-bold text-secondary py-2 border-t mt-4">
                    Condition <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3 pt-2">
                    {conditionOptions.map(opt => (
                      <div key={opt} className="flex items-center space-x-2">
                        <Checkbox id={`condition-${opt}`} />
                        <label htmlFor={`condition-${opt}`} className="text-sm font-medium leading-none">
                          {opt}
                        </label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

              </div>
              
              <Button className="w-full mt-8 rounded-full font-bold">Apply Filters</Button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {/* Sort & View Controls */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 hidden sm:inline-block">
                Showing 1-{smartphones.length} of {smartphones.length} products
              </span>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-sm font-bold text-secondary shrink-0">Sort By:</span>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="discount">Highest Discount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {smartphones.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
              {/* Duplicate some products for layout demonstration */}
              {smartphones.map((product, index) => (
                <ProductCard key={`dup-${product.id}`} product={{...product, id: `dup-${product.id}`}} index={index+5} />
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default" className="bg-primary hover:bg-primary/90">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
