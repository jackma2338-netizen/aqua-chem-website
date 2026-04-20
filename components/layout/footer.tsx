'use client';

/**
 * Footer 组件
 * 佛山市梦泽精细化工
 */

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-lg text-white">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {COMPANY_INFO.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="电话"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">产品分类</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>复合类应用（6款）</li>
              <li>彩印纸品包装（10款）</li>
              <li>密封胶系列（3款）</li>
              <li>防水涂料系列（6款）</li>
              <li>建筑装饰胶系列（4款）</li>
              <li>工业漆系列（2款）</li>
              <li>植绒胶系列（6款）</li>
              <li>硬挺类应用（7款）</li>
              <li>家具类（5款）</li>
              <li>其他（4款）</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-slate-400">
                  {COMPANY_INFO.address.province}{COMPANY_INFO.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 text-amber-400 shrink-0 text-xs font-bold">人</span>
                <span className="text-slate-400">联系人：{COMPANY_INFO.contact}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {COMPANY_INFO.name} 版权所有
          </p>
          <p className="text-xs text-slate-600">
            网站建设：OpenClaw AI
          </p>
        </div>
      </div>
    </footer>
  );
}
