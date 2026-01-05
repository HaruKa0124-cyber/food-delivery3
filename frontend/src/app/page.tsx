"use client"

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MenuContainer from "./components/MenuContainer"
import { AddressModal } from "./components/AddressModal"
import { AddToCartNotice } from "./components/Notification"

export default function Home() {
  const [showNotice, setShowNotice] = useState(false)
  const [openAddress, setOpenAddress] = useState(false)

  return (
    <div className="flex flex-col relative">
      {/* Header */}
      <Header onLocationClick={() => setOpenAddress(true)} />

      {/* Hero */}
      <img src="/BG.png" alt="Background" className="w-full h-[570px]" />

      {/* Menu */}
      <div className="bg-[#404040] pt-[54px]">
        <MenuContainer setShowNotice={setShowNotice} />
      </div>

      {/* Footer */}
      <div className="pt-[54px] bg-[#404040]">
        <Footer />
      </div>

      {/* Notifications & Address Modal */}
      <AddToCartNotice show={showNotice} />
      <AddressModal open={openAddress} onClose={() => setOpenAddress(false)} />
    </div>
  )
}
