/**
 * 全局加载状态
 * Route-level loading UI
 */
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-500 text-sm">加载中...</p>
      </div>
    </div>
  );
}
