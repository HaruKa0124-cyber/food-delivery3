"use client"

import { Button } from "@/components/ui/button"

interface ChangeDeliveryState {
  open: boolean
  onClose: () => void
}

export function ChangeDeliveryState({ open, onClose }: ChangeDeliveryState) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[364px] bg-white rounded-[12px]  h-[200px] p-[24px] gap-[24px]">
        <div className="flex flex-col gap-[24px]">
        <div className="w-[316px] h-[36px] flex flex-row justify-between items-center">
            <p className="text-[14px] text-[#09090b]">Change delivery state</p>
            <div onClick={onClose} className="w-[36px] h-[36px] rounded-full flex justify-center items-center cursor-pointer bg-[#f4f4f5]">X</div>
        </div>
        <div className="flex flex-row gap-[16px]">
            <Button className="w-[94.67px] h-[32px] rounded-full border-[#ef4444] border text-[#ef4444] bg-[#ffffff]">Delivered</Button>
            <Button className="w-[94.67px] h-[32px] rounded-full text-[#18181b] bg-[#f4f4f5]">Pending</Button>
            <Button className="w-[94.67px] h-[32px] rounded-full text-[#18181b] bg-[#f4f4f5]">Cancelled</Button>
        </div>
        <div className="">
            <Button className="w-[316px] h-[36px] rounded-full bg-[#18181b]">Save</Button>
        </div>
        </div>
      </div>
      </div>
  )
}
