"use client";
import React from "react";
import clsx from "clsx";

interface LabelBadgeProps {
  label: string;
}

export default function LabelBadge({ label }: LabelBadgeProps) {
  const key = label.trim();

  const colorMap: Record<string, string> = {
    Disciplined:
      "bg-[color:var(--label-disciplined-bg)] text-[color:var(--label-disciplined-text)] border border-[color:var(--label-disciplined-text)]/40",
    Relief:
      "bg-[color:var(--label-relief-bg)] text-[color:var(--label-relief-text)] border border-[color:var(--label-relief-text)]/40",
    Focused:
      "bg-[color:var(--label-focused-bg)] text-[color:var(--label-focused-text)] border border-[color:var(--label-focused-text)]/40",
    ExecutionConfidence:
      "bg-[color:var(--label-execution-bg)] text-[color:var(--label-execution-text)] border border-[color:var(--label-execution-text)]/40",
    SlightAnxiety:
      "bg-[color:var(--label-anxiety-bg)] text-[color:var(--label-anxiety-text)] border border-[color:var(--label-anxiety-text)]/40",
  };

  return (
    <span
      className={clsx(
        "text-[13px] font-medium px-3 py-[3px] rounded-full transition-all duration-150",
        "border shadow-[inset_0_0_6px_rgba(0,0,0,0.25)]",
        "select-none hover:opacity-90",
        colorMap[key] ||
          "bg-[#1E1E1E] text-muted-foreground border border-[#2A2A2A]"
      )}
    >
      #{key}
    </span>
  );
}
