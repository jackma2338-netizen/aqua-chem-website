'use client';

/**
 * Features Section
 * 佛山市梦泽精细化工 - 公司优势展示
 */

import { Droplets, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ADVANTAGES } from '@/lib/constants';

const ICON_MAP = {
  Droplets,
  Award,
  Users,
  Zap,
};

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            为什么选择梦泽
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            60款全水性产品线，专业技术支持，值得信赖的精细化工供应商
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, index) => {
            const IconComponent = ICON_MAP[adv.icon as keyof typeof ICON_MAP];
            return (
              <Card
                key={index}
                className="group border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    <IconComponent className="w-6 h-6 text-amber-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {adv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
