"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { ChangeDeliveryState } from "@/app/components/ChangeDeliveryState"

interface OrdersPage {
  onLocationClick?: () => void
  showNotice?: boolean
}


export type Order = {
  id: number
  customer: string
  food: string
  date: string
  total: string
  address: string
  deliveryState: "Pending" | "Delivered" | "Cancelled"
}


const data: Order[] = [
  {
    id: 1,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "12-р хороо, СБД",
    deliveryState: "Pending",
  },
  {
    id: 2,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "БГД, 5-р хороо",
    deliveryState: "Delivered",
  },
  {
    id: 3,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "СБД, 12-р хороо",
    deliveryState: "Cancelled",
  },
    {
    id: 4,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "СБД, 12-р хороо",
    deliveryState: "Cancelled",
  },
    {
    id: 5,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "СБД, 12-р хороо",
    deliveryState: "Cancelled",
  },
    {
    id: 6,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "СБД, 12-р хороо",
    deliveryState: "Cancelled",
  },
    {
    id: 7,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "СБД, 12-р хороо",
    deliveryState: "Cancelled",
  },
    {
    id: 8,
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    address: "СБД, 12-р хороо",
    deliveryState: "Cancelled",
  },
]


export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value)
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "id",
    header: "№",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "food",
    header: "Food",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "address",
    header: "Delivery Address",
  },
  {
    accessorKey: "deliveryState",
    header: "Delivery state",
    cell: ({ row }) => {
      const state = row.getValue("deliveryState") as string

      const color =
        state === "Delivered"
          ? "border-green-500 text-green-600"
          : state === "Cancelled"
          ? "border-gray-400 text-gray-500"
          : "border-red-400 text-red-500"

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex items-center gap-1 rounded-full border px-3 py-1 text-sm ${color}`}
            >
              {state}
              <ChevronDown size={14} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Delivered</DropdownMenuItem>
            <DropdownMenuItem>Cancelled</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function OrdersPage({}: OrdersPage) {
  const [cartOpen, setCartOpen] = useState(false)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="w-full pt-[120px] pl-[15px] pr-[20px]">
    <div className="rounded-xl bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="text-sm text-muted-foreground">32 items</p>
        </div>

        <Button
        onClick={() => setCartOpen(true)}
        className="rounded-full">
          Change delivery state
          <span className="ml-2 rounded-full bg-white px-2 text-xs text-black">
            1
          </span>
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-xs text-muted-foreground"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-muted/40"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        {Array.from({ length: table.getPageCount() }).map((_, i) => (
          <Button
            key={i}
            size="icon"
            variant={
              table.getState().pagination.pageIndex === i
                ? "default"
                : "outline"
            }
            onClick={() => table.setPageIndex(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
<ChangeDeliveryState
  open={cartOpen}
  onClose={() => setCartOpen(false)}
/>
    </div>
  )
}
