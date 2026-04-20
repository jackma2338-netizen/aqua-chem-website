import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ProductsPreviewSection } from '@/components/sections/products-preview-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsPreviewSection />
    </>
  );
}
