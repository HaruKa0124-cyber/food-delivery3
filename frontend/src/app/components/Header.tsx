"use client"

import { useState } from "react"
import { MapPin, ChevronRight, ShoppingCart, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CartInformation } from "./CartInformation"
import { AddToCartNotice } from "./Notification"

interface HeaderProps {
  onLocationClick?: () => void
  showNotice?: boolean
}

export default function Header({ onLocationClick, showNotice }: HeaderProps) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="w-full h-[68px] bg-[#18181b] pt-[12px] pb-[12px] flex justify-between pr-[88px] pl-[88px] relative">
      
      {/* Logo */}
      <div className="flex flex-row gap-[12px]">
        <img src="/logo.png" alt="Logo" className="w-[46px] h-[37.29px]" />
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-[20px] text-[#fafafa]">NOM</p>
            <p className="text-[20px] text-[#ef4444]">NOM</p>
          </div>
          <p className="text-[12px] text-[#f4f4f5]">Swift delivery</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-row gap-[12.81px]">
        
        {/* Delivery address */}
        <div
          onClick={onLocationClick}
          className="w-[251px] h-[36px] bg-[#ffffff] rounded-full flex flex-row p-[7px] gap-[4px] cursor-pointer"
        >
          <MapPin className="text-[#ef4444]" />
          <div className="flex flex-row gap-[4px]">
            <p className="text-[#ef4444] text-[12px]">Delivery address:</p>
            <p className="text-[#71717a] text-[12px]">Add Location</p>
          </div>
          <ChevronRight className="text-[#71717a]" />
        </div>

        {/* Cart */}
        <div
          onClick={() => setCartOpen(true)}
          className="w-[36px] h-[36px] bg-[#f4f4f5] rounded-full p-[10px] cursor-pointer"
        >
          <ShoppingCart className="w-[16px] h-[16px] text-[#18181b]" />
        </div>

        {/* User */}
        <DropdownMenu>
          <DropdownMenuTrigger> 
            <div className="w-[36px] h-[36px] bg-[#ef4444] rounded-full p-[10px]">
              <User className="w-[16px] h-[16px] text-[#fafafa]" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Test@gmail.com</DropdownMenuItem>
            <DropdownMenuItem className="flex justify-center">
              <Button className="w-[80px] h-[36px] bg-[#f4f4f5] rounded-full text-[#18181b]">
                Sign out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Cart modal */}
      <CartInformation
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {/* Notification */}
      <AddToCartNotice show={showNotice ?? false} />
    </div>
  )
}
