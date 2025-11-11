"use client";
import React from "react";
import { ImagePlus, MoreVertical } from "lucide-react";

interface CardHeaderProps {
  title: string;
}

export default function CardHeader({ title }: CardHeaderProps) {
  return (
    <div
      className="
        flex items-center justify-between
        w-full
        h-[41px]
        rounded-[10px]
        px-4
        border border-[#343434]
        bg-gradient-to-b from-[#0F0F0F] to-[#14151C]
      "
    >
   
      <h3 className="text-[15px] font-semibold text-white tracking-tight">
        {title}
      </h3>

    
      <div className="flex items-center gap-2 text-[#9B9B9B]">
        {/* Add Image or Card */}
        <button
          className="p-1.5 rounded-md hover:bg-[#1E1E1E]/80 transition-colors"
          title="Add image or card"
        >
          <ImagePlus size={17} strokeWidth={1.5} />
        </button>

        {/* More Options */}
        <button
          className="p-1.5 rounded-md hover:bg-[#1E1E1E]/80 transition-colors"
          title="More options"
        >
          <MoreVertical size={17} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
