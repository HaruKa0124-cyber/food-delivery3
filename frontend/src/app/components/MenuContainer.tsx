"use client"

import { FoodCard } from "./FoodCard"
import Link from "next/link"

interface CardType {
  title: string
  price: string
  desc: string
}

interface CategoryType {
  name: string
  cards: CardType[]
}

export default function MenuContainer({ setShowNotice }: { setShowNotice: (val: boolean) => void }) {
  const categories: CategoryType[] = [
    {
      name: "Appetizers",
      cards: [
        { title: "Finger food 1", price: "$12.99", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
        { title: "Finger food 2", price: "$13.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
        { title: "Finger food 3", price: "$11.99", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
        { title: "Finger food 4", price: "$14.25", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
        { title: "Finger food 5", price: "$12.50", desc: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar." },
        { title: "Finger food 6", price: "$13.00", desc: "Stuffed mushrooms with cheese and herbs." },
      ],
    },
    {
      name: "Salads",
      cards: [
        { title: "Caesar Salad", price: "$10.99", desc: "Classic Caesar salad with crispy croutons." },
        { title: "Greek Salad", price: "$11.50", desc: "Fresh vegetables with feta cheese and olives." },
        { title: "Avocado Salad", price: "$12.00", desc: "Avocado with greens and lemon dressing." },
      ],
    },
    {
      name: "Lunch favorites",
      cards: [
        { title: "Grilled Chicken", price: "$15.99", desc: "Grilled chicken with steamed vegetables." },
        { title: "Beef Steak", price: "$18.50", desc: "Juicy beef steak with garlic butter." },
        { title: "Salmon Fillet", price: "$17.00", desc: "Pan-seared salmon with lemon sauce." },
        { title: "Pasta Alfredo", price: "$14.99", desc: "Creamy Alfredo pasta with parmesan." },
        { title: "Veggie Wrap", price: "$12.50", desc: "Healthy veggie wrap with hummus." },
        { title: "Burger Combo", price: "$13.99", desc: "Beef burger with fries and drink." },
      ],
    },
  ]

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[1264px] flex flex-col gap-[54px]">
        {categories.map((category, i) => (
          <div key={i} className="flex flex-col gap-[24px]">
            {/* Category title with route */}
            <Link href={`/category/${encodeURIComponent(category.name)}`}>
              <p className="text-[30px] text-white cursor-pointer hover:text-red-500">
                {category.name}
              </p>
            </Link>

            {/* Cards */}
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
        ))}
      </div>
    </div>
  )
}
