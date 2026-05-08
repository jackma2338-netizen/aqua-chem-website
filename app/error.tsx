'use client';

import { RefreshCw } from 'lucide-react';

/**
 * 全局错误边界
 * Error Boundary for route-level errors
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">⚠️</span>
        </div>
        <h1 className="text-xl font-bold text-slate-900 mb-2">
          页面加载出错
        </h1>
        <p className="text-slate-500 mb-6 max-w-sm mx-auto text-sm">
          请稍后重试，如问题持续存在请联系我们
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium h-10 px-5"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          重试
        </button>
      </div>
    </div>
  );
}
