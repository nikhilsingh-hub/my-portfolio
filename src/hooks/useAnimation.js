import { useState, useEffect, useRef } from 'react';

// Hook for scroll-based animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first intersection for performance
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
};

// Hook for typing animation
export const useTypingAnimation = (texts, speed = 200) => {
  const [displayTexts, setDisplayTexts] = useState(
    texts.map(() => '')
  );

  useEffect(() => {
    const animateTexts = () => {
      const maxLength = Math.max(...texts.map(text => text.length));
      
      for (let i = 0; i <= maxLength; i++) {
        setTimeout(() => {
          setDisplayTexts(
            texts.map(text => text.substring(0, i))
          );
        }, i * speed);
      }
    };

    animateTexts();
  }, [texts, speed]);

  return displayTexts;
};

// Hook for staggered animations
export const useStaggeredAnimation = (items, delay = 200) => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    items.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => new Set([...prev, index]));
      }, index * delay);
    });
  }, [items, delay]);

  return visibleItems;
};
