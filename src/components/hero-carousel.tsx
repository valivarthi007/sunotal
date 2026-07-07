import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import tradioLogo from '@assets/tradio-logo.svg';

// Import images from products (since we don't have dedicated hero images, we can use the product images)
import redmiImage from '@assets/generated_images/redmi-note-12-pro.jpg';
import galaxyImage from '@assets/generated_images/galaxy-s23-ultra.jpg';
import iphoneImage from '@assets/generated_images/iphone-14-pro.jpg';

const slides = [
  {
    id: 1,
    bgColor: 'bg-[#F9F6F0]',
    textColor: 'text-[#101828]',
    title: 'Best Offers on Smartphones',
    image: redmiImage,
    deals: [
      { name: 'REDMI NOTE 12 PRO (8/128)', price: '₹14,999', mrp: '₹24,999' },
      { name: 'REDMI NOTE 12 PRO (12/256)', price: '₹16,999', mrp: '₹27,999' }
    ]
  },
  {
    id: 2,
    bgColor: 'bg-[#101828]',
    textColor: 'text-white',
    title: 'Premium Android Experience',
    image: galaxyImage,
    deals: [
      { name: 'GALAXY S23 ULTRA (12/256)', price: '₹84,999', mrp: '₹149,999' },
    ]
  },
  {
    id: 3,
    bgColor: 'bg-primary',
    textColor: 'text-white',
    title: 'Upgrade to Apple Pro',
    image: iphoneImage,
    deals: [
      { name: 'iPHONE 14 PRO (128GB)', price: '₹65,999', mrp: '₹129,900' },
    ]
  }
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    
    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`flex-[0_0_100%] min-w-0 relative ${slide.bgColor} ${slide.textColor}`}
          >
            {/* Watermark Logo */}
            <div className="absolute top-10 left-10 opacity-5 pointer-events-none w-1/3">
              <img src={tradioLogo} alt="" className={`w-full ${slide.bgColor === 'bg-[#101828]' || slide.bgColor === 'bg-primary' ? 'filter brightness-0 invert' : ''}`} />
            </div>

            <div className="container mx-auto px-4 md:px-12 h-[400px] md:h-[500px] flex flex-col md:flex-row items-center justify-between">
              
              <div className="w-full md:w-1/2 pt-12 md:pt-0 z-10">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
                        {slide.title}
                      </h2>
                      
                      <div className="flex flex-col gap-3">
                        {slide.deals.map((deal, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                            className={`inline-flex items-center self-start gap-4 px-5 py-2.5 rounded-full ${
                              slide.bgColor === 'bg-primary' 
                                ? 'bg-white text-primary' 
                                : 'bg-primary text-white'
                            }`}
                          >
                            <span className="font-bold text-sm md:text-base">{deal.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs md:text-sm font-medium opacity-80">From</span>
                              <span className="font-black text-lg md:text-xl">{deal.price}</span>
                              <span className="text-sm line-through opacity-70 ml-1">{deal.mrp}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full md:w-1/2 h-full flex items-center justify-center relative mt-8 md:mt-0 z-10">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.7, type: "spring" }}
                      src={slide.image}
                      alt="Featured product"
                      className="max-h-[80%] max-w-[80%] object-contain drop-shadow-2xl mix-blend-multiply"
                      style={slide.bgColor === 'bg-[#101828]' || slide.bgColor === 'bg-primary' ? { mixBlendMode: 'normal' } : {}}
                    />
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button 
        variant="outline" 
        size="icon" 
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur border-none hover:bg-white text-secondary shadow-lg hidden md:flex"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </Button>
      <Button 
        variant="outline" 
        size="icon" 
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur border-none hover:bg-white text-secondary shadow-lg hidden md:flex"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex 
                ? 'bg-white w-8 shadow-sm' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
