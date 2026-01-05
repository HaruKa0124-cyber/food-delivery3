"use client";

import { Check } from "lucide-react";

export function AddToCartNotice({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div
      className="fixed top-[96px] left-1/2 -translate-x-1/2
                 w-[357px] h-[48px]
                 flex items-center gap-[8px]
                 pl-[44px] pr-[24px] py-[8px]
                 rounded-lg
                 bg-[#18181B]
                 border border-[#E4E4E7]
                 shadow-[0px_4px_6px_-1px_#0000001A,0px_2px_4px_-2px_#0000001A]"
    >
      <Check className="absolute left-4 w-4 h-4 text-white" />
      <p className="text-sm text-white">
        Food is being added to the cart!
      </p>
    </div>
  );
}
