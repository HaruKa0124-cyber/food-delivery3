"use client";

import { Button } from "@/components/ui/button";
import { LayoutDashboard } from 'lucide-react';
import { Truck } from 'lucide-react';
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
       <div>
        <img src="/logo.png" />
       </div>
        <div>
          <h1 className="font-bold text-lg">NomNom</h1>
          <p className="text-xs text-gray-500">Swift delivery</p>
        </div>
      </div>

      <nav className="space-y-2">
        <div className="flex flex-col gap-[20px]">
        <Link href="/admin">
          <Button
            variant={pathname === "/admin" ? "default" : "ghost"}
            className={
              pathname === "/admin"
                ? "w-full justify-start gap-2 bg-black text-white hover:bg-black/90 rounded-full"
                : "w-full justify-start gap-2"
            }
          >
            <LayoutDashboard  className="w-4 h-4" />
            Food menu
          </Button>
        </Link>
        <Link href="/admin/orders">
          <Button
            variant={pathname === "/admin/orders" ? "default" : "ghost"}
            className={
              pathname === "/admin/orders"
                ? "w-full justify-start gap-2 bg-black text-white hover:bg-black/90 rounded-full"
                : "w-full justify-start gap-2"
            }
          >
            <Truck className="w-4 h-4" />
            Orders
          </Button>
        </Link>
        </div>
      </nav>
    </aside>
  );
}