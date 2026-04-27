'use client';

/**
 * Products Preview Section
 * 首页产品展示区域
 * 佛山市梦泽精细化工
 */

import Link from 'next/link';
import { ArrowRight, Package, Layers, Droplets, Wrench, Paintbrush, FlaskConical } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, PRODUCT_CATEGORIES } from '@/lib/data';

const CATEGORY_ICONS: Record<string, any> = {
  composite: Layers,
  paper: Package,
  sealant: Wrench,
  waterproof: Droplets,
  construction: Wrench,
  industrial: Paintbrush,
  flocking: FlaskConical,
  stiffening: Layers,
  furniture: Package,
  other: Package,
};

// 展示每个分类的代表产品（前8个产品）
const previewProducts = products.slice(0, 8);

export function ProductsPreviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              产品中心
            </h2>
            <p className="text-slate-600">
              全产品线60款水性合成乳液产品，覆盖十大应用领域
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 text-slate-700 text-sm font-medium h-10 px-4 shrink-0"
          >
            查看全部产品
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewProducts.map((product) => {
            const CategoryIcon = CATEGORY_ICONS[product.category] || Package;
            const categoryLabel = PRODUCT_CATEGORIES.find(
              (c) => c.value === product.category
            )?.label;

            return (
              <Card
                key={product.id}
                className="group border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Product Image Placeholder */}
                <div className="h-36 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center relative gap-2">
                  <CategoryIcon className="w-10 h-10 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-slate-700 hover:bg-white shadow-sm text-xs">
                    {categoryLabel}
                  </Badge>
                </div>

                <CardContent className="pt-3">
                  <h3 className="font-semibold text-slate-900 mb-1.5 text-sm group-hover:text-amber-700 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-2 space-y-0.5">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-500 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-0">
                  <Link
                    href={`/products#${product.id}`}
                    className="flex w-full items-center justify-center text-amber-600 hover:text-amber-700 hover:bg-amber-50 -mx-4 mb-0 px-4 h-10 rounded-none border-t border-slate-100 text-sm font-medium"
                  >
                    查看详情
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
