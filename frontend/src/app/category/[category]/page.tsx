"use client"

import { useParams } from "next/navigation"
import { FoodCard } from "@/app/components/FoodCard"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { useState } from "react"
import MenuContainer from "@/app/components/MenuContainer"
import { FoodDetailModal } from "@/app/components/FoodDetailModal"

const categories = [
  {
    name: "Appetizers",
    cards: [
      { title: "Finger food 1", price: "$12.99", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
      { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
    ],
  },
  {
    name: "Salads",
    cards: [
      { title: "Caesar Salad", price: "$10.99", desc: "Classic Caesar salad with crispy croutons." },
      { title: "Greek Salad", price: "$11.50", desc: "Fresh vegetables with feta cheese and olives." },
      { title: "Greek Salad", price: "$11.50", desc: "Fresh vegetables with feta cheese and olives." },
      { title: "Greek Salad", price: "$11.50", desc: "Fresh vegetables with feta cheese and olives." },
      { title: "Greek Salad", price: "$11.50", desc: "Fresh vegetables with feta cheese and olives." },
      { title: "Greek Salad", price: "$11.50", desc: "Fresh vegetables with feta cheese and olives." },
    ],
  },
  {
    name: "Lunch favorites",
    cards: [
      { title: "Grilled Chicken", price: "$15.99", desc: "Grilled chicken with steamed vegetables." },
      { title: "Beef Steak", price: "$18.50", desc: "Juicy beef steak with garlic butter." },
      { title: "Beef Steak", price: "$18.50", desc: "Juicy beef steak with garlic butter." },
      { title: "Beef Steak", price: "$18.50", desc: "Juicy beef steak with garlic butter." },
      { title: "Beef Steak", price: "$18.50", desc: "Juicy beef steak with garlic butter." },
      { title: "Beef Steak", price: "$18.50", desc: "Juicy beef steak with garlic butter." },
    ],
  },
]

export default function CategoryPage() {
  const params = useParams()
  const categoryName = decodeURIComponent(params.category as string)
  const [showNotice, setShowNotice] = useState(false)

  const category = categories.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  )

  if (!category) {
    return (
      <div className="text-white text-center mt-20">
        Category not found
      </div>
    )
  }

  return (
   <div className="">
    <Header />
    
    <div className="bg-[#404040] min-h-screen pt-[54px]">
      <div className="flex justify-center">
        <div className="w-[1264px] flex flex-col gap-[54px]">
          <p className="text-[30px] text-white">
            {category.name}
          </p>

          <div className="flex flex-wrap gap-[36px]">
            {category.cards.map((card, idx) => (
                <FoodCard
                  key={idx}
                  id={`${category.name}-${idx}`}
                  title={card.title}
                  price={card.price}
                  desc={card.desc}
                  setShowNotice={setShowNotice}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="pt-[50px] bg-[#404040]">
       <Footer />
       </div>
    </div>
  )
} 
