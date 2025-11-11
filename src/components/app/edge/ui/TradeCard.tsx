"use client";
import React from "react";
import { MoreVertical } from "lucide-react";

interface TradeCardProps {
  ticker: string;
  entry: string;
  stopLoss: string;
  takeProfit: string;
  quantity: string;
  direction?: "Buy" | "Sell";
}

export default function TradeCard({
  ticker,
  direction,
  entry,
  stopLoss,
  takeProfit,
  quantity,
}: TradeCardProps) {
  const isBuy = direction === "Buy";

  // Define badge styles dynamically using global CSS variables
  const badgeClasses = isBuy
    ? "bg-[var(--label-buy-bg)] text-[var(--label-buy-text)] border border-[color:var(--label-buy-text)]/30"
    : "bg-[var(--label-sell-bg)] text-[var(--label-sell-text)] border border-[color:var(--label-sell-text)]/30";

  const renderRow = (
    label: string,
    value: string,
    colorClass?: string
  ) => (
    <div>
      <p className="text-muted-foreground">{label}</p>
      <p
        className={`font-semibold ${
          colorClass || "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );

  return (
    <div className="relative w-[320px] rounded-2xl border border-[#2A2A2A] bg-gradient-to-b from-[#0F0F0F] to-[#14151C] p-5 flex flex-col gap-4 transition-transform duration-200 hover:scale-[1.01] hover:border-[var(--label-buy-text)]/20">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-base font-medium tracking-wide">
            {ticker}
          </h4>
          {direction && (
            <span
              className={`text-xs font-medium mt-1 px-2 py-[2px] rounded-full w-fit ${badgeClasses}`}
            >
              {isBuy ? "▲ Buy" : "▼ Sell"}
            </span>
          )}
        </div>
        <MoreVertical
          size={16}
          className="text-muted-foreground"
        />
      </div>

      {/* Body */}
      <div className="grid grid-cols-2 gap-y-3 text-sm mt-2">
        {renderRow("Entry Price", entry)}
        {renderRow("Stop Loss", stopLoss, "text-red-400")}
        {renderRow("Quantity", quantity)}
        {renderRow("Take Profit", takeProfit, "text-green-400")}
      </div>
    </div>
  );
}
