"use client";

export function MapLegend() {
  return (
    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-2 sm:p-3 text-xs space-y-1.5">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="text-gray-600">Needs help</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-amber-500" />
        <span className="text-gray-600">Getting there</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-gray-600">Well-staffed</span>
      </div>
    </div>
  );
}
