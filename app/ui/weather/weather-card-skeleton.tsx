import React from "react";
import { Skeleton } from "../skeleton";

export default function WeatherCardSkeleton() {
  return (
    <div className="px-5 py-2 border-1 rounded-sm bg-gray-50 animate-pulse">
      <div className="flex w-full items-center justify-between mb-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-6 w-48" />
      </div>

      <div className="flex gap-3 justify-center text-center py-10 items-center bg-gradient-to-bl from-gray-200 to-gray-300 rounded-t-xl">
        <Skeleton className="w-20 h-20 rounded-full" />

        <Skeleton className="h-16 w-32" />

        <Skeleton className="w-12 h-12 rounded-full" />
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white/50 rounded-lg"
            >
              <Skeleton className="w-8 h-8 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
