'use client';

/**
 * Hero Section
 * 佛山市梦泽精细化工 - 首页首屏
 */

import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 背景 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg-4k---6d719f77-2a44-4414-ae60-b5704c4f2d0c.png)',
        }}
      />
      
      {/* 渐变叠加 */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/55 to-transparent" />
      
      {/* 网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>佛山市梦泽精细化工 · 全产品线60款</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
            专注水性合成乳液
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
              全产品线专业供应商
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            专业从事水性合成乳液研发、生产与销售，主营密封胶、防水涂料、彩印纸品包装胶、工业漆、植绒胶等全系列产品
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium h-11 px-6 shadow-lg shadow-amber-500/30 transition-colors"
            >
              浏览全部产品
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white text-sm font-medium h-11 px-6 backdrop-blur-sm transition-colors"
            >
              联系我们
            </Link>
          </div>

          {/* 统计数据 */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: '60', label: '款产品' },
              { value: '10', label: '大产品分类' },
              { value: '24h', label: '快速响应' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
