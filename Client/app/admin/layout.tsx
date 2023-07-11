"use client"
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute"
import LateralOptions from "@/components/lateralOptions/LateralOptions"
import Link from "next/link"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <PrivateRoute>
            <div className="pt-[6.8rem] flex bg-gray-800 min-h-screen">
                <LateralOptions/>
                {children}
            </div>
        </PrivateRoute>
    )
}
