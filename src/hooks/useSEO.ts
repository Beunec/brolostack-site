import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOData, updatePageSEO, SEOData } from '../utils/seo';

export function useSEO(customSEO?: Partial<SEOData>) {
  const location = useLocation();
  
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    try {
      const seoData = getSEOData(location.pathname);
      
      // Merge with custom SEO data if provided
      const finalSEO = { ...seoData, ...customSEO };
      
      updatePageSEO(finalSEO);
    } catch (error) {
      console.error('SEO update failed:', error);
    }
  }, [location.pathname, customSEO]);
}

export default useSEO;
