'use client';

/**
 * 产品中心页面
 * Products Page - 佛山市梦泽精细化工 53款全产品线
 */

import { useState, useMemo } from 'react';
import { Search, X, Package, Layers, Droplets, Wrench, Paintbrush, FlaskConical, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  products,
  PRODUCT_CATEGORIES,
  Product,
} from '@/lib/data';

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

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applications.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryLabel = (category: string) => {
    return PRODUCT_CATEGORIES.find((c) => c.value === category)?.label || category;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              产品中心
            </h1>
            <p className="text-lg text-slate-300">
              佛山市梦泽精细化工有限公司 · 全产品线53款水性合成乳液产品
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 lg:top-20 z-10 bg-white border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="搜索产品名称、应用场景..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-slate-200 focus:border-teal-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value || 'all')}>
              <SelectTrigger className="w-full sm:w-[200px] border-slate-200">
                <SelectValue placeholder="选择分类" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 mb-6">
            共找到 <span className="font-semibold text-slate-700">{filteredProducts.length}</span> 个产品
            {selectedCategory !== 'all' && (
              <span> · <span className="text-teal-600">{getCategoryLabel(selectedCategory)}</span></span>
            )}
          </p>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500">未找到匹配的产品</p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-teal-600"
              >
                清除筛选条件
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => {
                const CategoryIcon = CATEGORY_ICONS[product.category] || Package;

                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    className="group border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 overflow-hidden scroll-mt-28 flex flex-col"
                  >
                    {/* Category Badge + Icon */}
                    <div className="h-32 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center relative gap-2">
                      <CategoryIcon className="w-10 h-10 text-slate-300 group-hover:text-teal-400 transition-colors" />
                      <Badge className="absolute top-3 right-3 bg-white/90 text-slate-700 text-xs">
                        {getCategoryLabel(product.category)}
                      </Badge>
                    </div>

                    <CardContent className="pt-3 pb-3 flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1.5 text-sm group-hover:text-teal-700 transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-slate-100 text-slate-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Applications */}
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {product.applications.slice(0, 3).join(' · ')}
                      </p>
                    </CardContent>

                    {/* Expandable Details */}
                    {product.specifications && Object.keys(product.specifications).length > 0 && (
                      <div className="px-4 pb-3">
                        <details className="group">
                          <summary className="text-xs text-teal-600 cursor-pointer hover:text-teal-700 flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 group-open:rotate-90 transition-transform" />
                            技术参数
                          </summary>
                          <div className="mt-2 pt-2 border-t border-slate-100">
                            <dl className="grid grid-cols-1 gap-x-3 gap-y-1 text-xs">
                              {Object.entries(product.specifications).map(
                                ([key, value]) => (
                                  <div key={key} className="flex gap-2">
                                    <dt className="text-slate-400 shrink-0">{key}:</dt>
                                    <dd className="text-slate-700">{value}</dd>
                                  </div>
                                )
                              )}
                            </dl>
                          </div>
                          {product.warranty && (
                            <p className="mt-1.5 text-xs text-amber-600 font-medium">🏆 {product.warranty}</p>
                          )}
                          {product.process && (
                            <p className="mt-1 text-xs text-slate-500">工艺: {product.process}</p>
                          )}
                        </details>
                      </div>
                    )}

                    {/* Warranty / Process quick view */}
                    {(product.warranty || product.process) && !product.specifications && (
                      <div className="px-4 pb-3">
                        {product.warranty && (
                          <p className="text-xs text-amber-600 font-medium">🏆 {product.warranty}</p>
                        )}
                        {product.process && (
                          <p className="text-xs text-slate-500 mt-1">工艺: {product.process}</p>
                        )}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
