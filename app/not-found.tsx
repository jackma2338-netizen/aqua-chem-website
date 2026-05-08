'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * 404 页面
 * 自定义未找到页面的展示
 */
export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          页面未找到
        </h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          您访问的页面不存在或已被移除，请检查链接是否正确
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium h-10 px-5"
          >
            <Home className="w-4 h-4 mr-2" />
            返回首页
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium h-10 px-5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回上一页
          </button>
        </div>
      </div>
    </div>
  );
}
