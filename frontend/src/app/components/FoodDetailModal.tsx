"use client"

import { Button } from "@/components/ui/button"

interface FoodDetailModalProps {
  open: boolean
  onClose: () => void
  title: string
  price: string
  desc: string
  setShowNotice?: (val: boolean) => void
}

export function FoodDetailModal({ open, onClose, title, price, desc, setShowNotice }: FoodDetailModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[826px] h-[412px] bg-white rounded-[20px] p-[24px] flex gap-[16px]">
        <img src="/food.png" className="w-[377px] h-[364px] rounded-[12px] object-cover" />
        <div className="flex flex-col justify-between w-[377px]">
          <div className="flex justify-between">
            <p className="text-[#ffffff]">.</p>
            <div onClick={onClose} className="w-[44px] h-[44px] rounded-full border flex justify-center items-center cursor-pointer">X</div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="text-[30px] text-[#ef4444] font-semibold">{title}</p>
            <p className="text-[16px] text-[#09090b]">{desc}</p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[16px] text-[#09090b]">Total price</p>
                <p className="text-[24px] text-[#09090b]">{price}</p>
              </div>
              <div className="flex gap-[12px] items-center">
                <div className="w-[44px] h-[44px] rounded-full border flex justify-center items-center cursor-pointer">-</div>
                <p className="text-[18px]">1</p>
                <div className="w-[44px] h-[44px] rounded-full border flex justify-center items-center cursor-pointer">+</div>
              </div>
            </div>
            <Button
              className="w-[377px] h-[44px] rounded-full bg-[#18181b]"
              onClick={() => {
                if (setShowNotice) {
                  setShowNotice(true)
                  setTimeout(() => setShowNotice(false), 2000)
                }
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
