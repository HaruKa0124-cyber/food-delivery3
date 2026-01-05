"use client"

import { useState } from "react"
import { Plus, Check } from "lucide-react"
import { FoodDetailModal } from "./FoodDetailModal"

interface FoodCardProps {
  id: string
  title: string
  price: string
  desc: string
  setShowNotice?: (val: boolean) => void
}

export function FoodCard({ id, title, price, desc, setShowNotice }: FoodCardProps) {
  const [selected, setSelected] = useState(false)
  const [openDetail, setOpenDetail] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selected && setShowNotice) {
      setSelected(true)
      setShowNotice(true)
      setTimeout(() => setShowNotice(false), 2000)
    }
  }

  return (
    <>
      <div
        onClick={() => setOpenDetail(true)}
        className="w-[397px] h-[342px] rounded-[20px] bg-white p-[16px] flex flex-col gap-[20px] cursor-pointer"
      >
        <div className="relative">
          <img
            src="/food.png"
            className="w-[365px] h-[210px] rounded-[12px] object-cover"
          />
          <div
            onClick={handleAdd}
            className={`absolute bottom-[20px] right-[20px] w-[44px] h-[44px] rounded-full flex items-center justify-center ${selected ? "bg-[#18181b]" : "bg-white"}`}
          >
            {selected ? (
              <Check className="w-[16px] h-[16px] text-white" />
            ) : (
              <Plus className="w-[16px] h-[16px] text-[#ef4444]" />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            <p className="text-[24px] text-[#ef4444]">{title}</p>
            <p className="text-[18px] text-[#09090b]">{price}</p>
          </div>
          <p className="text-[14px] text-[#09090b]">{desc}</p>
        </div>
      </div>

      <FoodDetailModal
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        title={title}
        price={price}
        desc={desc}
        setShowNotice={setShowNotice}
      />
    </>
  )
}
