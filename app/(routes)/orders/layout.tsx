"use client"

import OrderList from "@/components/OrderList";

export default function OrdersLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <OrderList />
      {children}
    </div>
  )
}