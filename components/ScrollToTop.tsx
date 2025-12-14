import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page/container is scrolled down
  const toggleVisibility = () => {
    const currentScroll = containerRef?.current ? containerRef.current.scrollTop : window.scrollY;
    if (currentScroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const target = containerRef?.current || window;
    target.addEventListener('scroll', toggleVisibility);
    return () => {
      target.removeEventListener('scroll', toggleVisibility);
    };
  }, [containerRef]);

  // If inside a container, we use absolute positioning relative to the frame
  // If window, we use fixed
  const positionClass = containerRef ? 'absolute bottom-6 right-6' : 'fixed bottom-6 right-6 md:bottom-10 md:right-10';

  return (
    <button
      onClick={scrollToTop}
      className={`${positionClass} z-50 p-4 rounded-full bg-green-600 text-white shadow-xl transition-all duration-500 transform hover:bg-green-700 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};