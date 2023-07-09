"use client"
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute"
import Link from "next/link"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <PrivateRoute>
            <div className="pt-[6.8rem] flex bg-gray-800 min-h-screen">
                <div className="flex flex-col items-center h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
                    <a className="flex items-center w-full px-3 mt-3" href="#">
                        <svg
                            className="w-8 h-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                        <span className="ml-2 text-sm font-bold">Parcels</span>
                    </a>
                    <div className="w-full px-2 ">
                        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                            <a
                                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                href="#"
                            >
                                <svg
                                    className="w-6 h-6 stroke-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="ml-2 text-sm font-medium">Gráficos</span>
                            </a>
                            <a
                                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                href="#"
                            >
                                <svg
                                    className="w-6 h-6 stroke-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <span className="ml-2 text-sm font-medium">Buscar</span>
                            </a>
                            <a
                                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                href="#"
                            >
                                <svg
                                    className="w-6 h-6 stroke-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                    />
                                </svg>
                                <span className="ml-2 text-sm font-medium">Docs</span>
                            </a>
                        </div>
                        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                                <div
                                    className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                >
                                    <svg
                                        className="w-6 h-6 stroke-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium">Mis compras</span>
                                </div>
                            <Link href={"/admin/product"}>
                                <div
                                    className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-border-outer" viewBox="0 0 16 16">
                                        <path d="M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z" />
                                        <path d="M0 0v16h16V0H0zm1 1h14v14H1V1z" />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium">Mis Productos</span>
                                </div>
                            </Link>
                            <a
                                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                href="#"
                            >
                                <svg
                                    className="w-6 h-6 stroke-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                                <span className="ml-2 text-sm font-medium">Ajustes</span>
                            </a>
                            <a
                                className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                href="#"
                            >
                                <svg
                                    className="w-6 h-6 stroke-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    />
                                </svg>
                                <span className="ml-2 text-sm font-medium">Mensajes</span>
                                <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                            </a>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </PrivateRoute>
    )
}
