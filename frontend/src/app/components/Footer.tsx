"use client"
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <div className="">
            <div className="w-full h-[755px] bg-[#18181b]">
                <div className="flex pt-[60px]">
                <div className="w-full h-[92px] bg-[#ef4444] gap-[34px]  pt-[16px] pl-[98px] flex flex-row">
                    <p className="text-[30px] text-[#fafafa]">Fresh fast delivered </p>
                    <p className="text-[30px] text-[#fafafa]">Fresh fast delivered </p>
                    <p className="text-[30px] text-[#fafafa]">Fresh fast delivered </p>
                    <p className="text-[30px] text-[#fafafa]">Fresh fast delivered </p>
                    <p className="text-[30px] text-[#fafafa]">Fresh fast deliver </p>
                </div>
                </div>
                <div className="pl-[88px] pt-[76px]">
                <div className="w-[1264px] h-[228px]">
                    <div className="flex flex-row gap-[220px]">
                        <div className="flex flex-col gap-[12px]">
                            <img src="/logo.png" className="w-[46px] h-[37px]"/>
                            <div className="">
                                <div className="flex flex-row">
                                    <p className="text-[20px] text-[#fafafa]">Nom</p>
                                    <p className="text-[20px] text-[#ef4444]">Nom</p>
                                </div>
                                <p className="text-[12px] text-[#f4f4f5]">Swift delivery</p>
                            </div>
                        </div>
                        <div className="flex gap-[112px]">
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[16px] text-[#71717a]">NOMNOM</p>
                                <p className="text-[16px] text-[#fafafa]">Home </p>
                                <p className="text-[16px] text-[#fafafa]">Contact us</p>
                                <p className="text-[16px] text-[#fafafa]">Delivery zone</p>
                            </div>
                            <div className="flex gap-[56px]">
                                <div className="flex flex-col gap-[12px] text-[16px] text-[#fafafa]">
                                    <p className="text-[#71717a]">MENU</p>
                                    <p>Appetizers</p>
                                    <p>Salads</p>
                                    <p>Pizzas</p>
                                    <p>Main dishes</p>
                                    <p>Desserts</p>
                                </div>
                                <div className="flex flex-col gap-[12px] text-[16px] text-[#fafafa]">
                                    <p className="text-[#18181b]">.</p>
                                    <p>Side dish </p>
                                    <p>Brunch</p>
                                    <p>Desserts</p>
                                    <p>Beverages</p>
                                    <p>Fish & Sea foods</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[16px] text-[#71717a]">FOLLOW US</p>
                                <div className="flex flex-row gap-[12px]">
                                    <Facebook className='text-[28px] h-[28px] text-[#ffffff]'/>
                                    <Instagram className='text-[28px] h-[28px] text-[#ffffff]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='pt-[104px] pl-[88px] flex flex-col gap-[30px]'>
                <div className="w-[1264px] h-px bg-[#71717a]" />
                <div className='flex flex-row text-[14px] text-[#71717a] gap-[48px]'>
                    <p>Copy right 2024 © Nomnom LLC</p>
                    <p>Privacy policy  </p>
                    <p>Terms and conditoin</p>
                    <p>Cookie policy</p>
                </div>
                </div>
            </div>
        </div>
    )
}