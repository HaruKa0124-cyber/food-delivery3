"use client"
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';


interface CartInformation {
  open: boolean
  onClose: () => void
}
interface FoodCardProps {
  id: string
  title: string
  price: string
  desc: string
  setShowNotice?: (val: boolean) => void
}

export function CartInformation({ open, onClose }: CartInformation) {
  if (!open) return null

  return (
<div className="fixed inset-0 z-50 bg-black/40">
  <div className="fixed right-1 w-[535px] h-[1024px] bg-[#404040] rounded-tl-[20px] rounded-bl-[20px] p-[32px] gap-[24px] flex flex-col">
    <div className="flex flex row justify-between">
        <div className="flex flex-row gap-[12px] items-center">
            <ShoppingCart className='w-[20px] h-[20px] text-[#fafafa]'/>
            <p className='text-[20px] text-[#fafafa]'>Order detail</p>
        </div>
        <div onClick={onClose} className="w-[36px] h-[36px] rounded-full border flex justify-center items-center cursor-pointer text-[#fafafa]">X</div>
    </div>
    <div className="w-[471px] h-[44px] bg-[#ffffff] rounded-full p-[4px] gap-[8px]">
        <Button className='w-[227.5px] h-[36px] bg-[#ef4444] text-[#fafafa] rounded-full text-[18px]'>Cart</Button>
        <Button className='w-[227.5px] h-[36px] bg-[#fafafa] rounded-full text-[18px] text-[#09090b]'>Order</Button>
    </div>
    <div className="w-[471px] h-[532px] bg-[#ffffff] rounded-[20px] p-[16px] flex flex-col justify-between">
        <div className='flex flex-col gap-[20px]'>
            <p className='text-[20px] text-[#71717a]'>My cart</p>
            <div className='flex flex-row gap-[10px]'>
                <img src="food.png" className='w-[124px] h-[120px] rounded-[12px]' />
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-row gap-[10px]'>
                        <div className='flex flex-col'>
                            <p className='text-[16px] text-[#ef4444]'>
                            Sunshine Stackers 
                            </p>
                            <p className='text-[12px] text-[#09090b]'>Fluffy pancakes stacked with fruits, cream, </p>
                            <p className='text-[12px] text-[#09090b]'>syrup, and powdered sugar.</p>
                        </div>
                        <div className='w-[36px] h-[36px] rounded-full border flex justify-center items-center text-[#ef4444] border-[#ef4444]'>X</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-[25px] text-[18px]'>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <p className='text-[16px] text-[#09090b]'>$12.99</p>
                    </div>
                </div>
            </div>
                        <div className='flex flex-row gap-[10px]'>
                <img src="food.png" className='w-[124px] h-[120px] rounded-[12px]' />
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-row gap-[10px]'>
                        <div className='flex flex-col'>
                            <p className='text-[16px] text-[#ef4444]'>
                            Sunshine Stackers 
                            </p>
                            <p className='text-[12px] text-[#09090b]'>Fluffy pancakes stacked with fruits, cream, </p>
                            <p className='text-[12px] text-[#09090b]'>syrup, and powdered sugar.</p>
                        </div>
                        <div className='w-[36px] h-[36px] rounded-full border flex justify-center items-center text-[#ef4444] border-[#ef4444]'>X</div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-[25px] text-[18px]'>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <p className='text-[16px] text-[#09090b]'>$12.99</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='flex flex-col gap-[8px]'>
            <p className='text-[#71717a] text-[20px]'>Delivery location</p>
                    <input
          placeholder="Please share your complete address"
          className="w-[439px] h-[80px] border rounded-[6px] pt-[8px] pl-[10px]"
        />
        </div>
    </div>
    <div className="w-[471px] h-[276px] bg-[#ffffff] p-[16px] gap-[20px] rounded-[20px]">
        <p className='text-[20px] text-[#71717a]'>Payment info</p>
        <div className='flex flex-col gap-[8px]'>
            <div className='flex flex-row justify-between'>
                <p className='text-[16px] text-[#71717a]'>Items </p>
                <p className='text-[16px] text-[#09090b]'>$25.98 </p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-[16px] text-[#71717a]'>Shipping </p>
                <p className='text-[16px] text-[#09090b]'>0.99$</p>
            </div>
        </div>
        <div className='flex flex-row justify-between'>
            <p className='text-[16px] text-[#71717a]'>Total </p>
            <p className='text-[16px] text-[#09090b]'>$26.97</p>
        </div>
        <Button className='w-[439px] h-[44px] bg-[#ef4444] text-[#fafafa] text-[14px]'>Checkout</Button>
    </div>
  </div>
</div>

  )
}
