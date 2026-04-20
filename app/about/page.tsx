import type { Metadata } from 'next';
import { Target, Eye, Heart, Award, Users, Package, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解绿源化工的发展历程、核心价值观和团队实力',
};

const MILESTONES = [
  { year: '2010', event: '绿源化工成立，开始专注于水性化工领域' },
  { year: '2014', event: '与多家国际知名供应商建立合作关系' },
  { year: '2017', event: '产品线扩展至水性涂料全系列' },
  { year: '2020', event: '通过 ISO 质量管理体系认证' },
  { year: '2023', event: '服务客户突破 500 家' },
];

const VALUES = [
  {
    icon: Target,
    title: '专业专注',
    description: '深耕水性化工领域14年，积累了丰富的行业经验和技术储备',
  },
  {
    icon: Heart,
    title: '绿色环保',
    description: '始终将环境保护放在首位，推广低VOC、无污染的水性产品',
  },
  {
    icon: Shield,
    title: '品质为本',
    description: '严格的质检体系，确保每一批产品都达到最高标准',
  },
  {
    icon: Clock,
    title: '客户至上',
    description: '快速响应客户需求，提供专业的技术支持和售后服务',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              关于绿源
            </h1>
            <p className="text-lg text-slate-300">
              专注水性化工14年，为客户提供高品质、环保的化工产品解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                我们的故事
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  绿源化工成立于2010年，源于创始人对环境保护的深切关注和化工行业的热爱。
                </p>
                <p>
                  我们深知传统溶剂型化工产品对环境和人体的危害，因此从创立之初就确立了
                  <strong className="text-slate-900">"专注水性化工，引领绿色未来"</strong>
                  的使命，致力于推广和应用水性化技术。
                </p>
                <p>
                  经过十余年的发展，绿源化工已成为华东地区知名的水性化工产品供应商，
                  产品涵盖水性涂料、水性胶黏剂、水性助剂等多个领域。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-teal-600">14+</div>
                  <div className="text-slate-600 mt-2">年行业深耕</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-teal-100 bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">企业使命</h3>
                <p className="text-slate-600 leading-relaxed">
                  通过推广水性化技术，减少化工行业对环境的影响，
                  为客户提供安全、环保、高性能的产品和解决方案。
                </p>
              </CardContent>
            </Card>
            <Card className="border-teal-100 bg-white">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">企业愿景</h3>
                <p className="text-slate-600 leading-relaxed">
                  成为国内领先的水性化工产品供应商，
                  推动行业绿色转型，为可持续发展贡献力量。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              核心价值观
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              这些价值观指引着我们每一次决策和行动
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <Card key={index} className="border-slate-100">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              发展历程
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {MILESTONES.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-6 ${
                      index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`pl-12 sm:pl-0 sm:w-1/2 ${
                        index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                      }`}
                    >
                      <div className="text-2xl font-bold text-teal-600">
                        {milestone.year}
                      </div>
                      <div className="text-slate-600 mt-1">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
