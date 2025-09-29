import React from "react";
import Link from "next/link";
import { ShoppingCart, User2, ChevronDown } from "lucide-react";
import TopNav from "./TopNav";
import Image from "next/image";
// Shop menu data object
const shopMenu = [
    {
        title: "MENS FASHION",
        items: [
            "Half Sleeve T-Shirt",
            "Polo T-Shirt",
            "Calligraphy T-Shirt",
            "Sports T- Shirt",
            "Sports Polo T-Shirt",
            "Sports Trouser",
            "Joggers",
            "Winter Collection",
        ],
    },
    { title: "WOMEN'S FASHION", items: [] },
    { title: "KIDS (BOYS)", items: ["Kids T-Shirt"] },
    { title: "KIDS (GIRLS)", items: [] },
    { title: "SPORTS", items: ["Bangladesh Jersey", "Football Jersey"] },
    { title: "ACCESSORIES", items: ["Wallet", "Belt", "Cap"] },
    { title: "FOOTWEAR", items: ["Men's Half Shoe's"] },
];

export default function SiteHeader() {
    
 
    
    return (
        <header className="sticky  top-0 z-50 w-full border-b bg-white">
            <TopNav />
            <div className="mx-auto bg-white relative flex gap-10 max-w-7xl items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-10">
                    <Image
                        src="/logo.png" // place your logo in the public folder
                        alt="Deen Fashion"
                        width={150}
                        height={100}
                        className="rounded-md"
                        priority
                    />
                </Link>

                {/* Shop Menu */}
                <nav className=" group ml-6 z-10">
                    <button className="text-lg font-bold text-gray-700 hover:text-indigo-600 flex items-center cursor-pointer ">Shop    <ChevronDown className="w-5 h-5" /></button>
                    <div className="absolute left-0 top-full hidden w-screen max-w-5xl bg-white shadow-lg group-hover:block">
                        <div className="grid grid-cols-7 gap-6 p-6 text-sm">
                            {shopMenu.map((section) => (
                                <div key={section.title}>
                                    <h4 className="mb-2 font-semibold text-gray-600">{section.title}</h4>
                                    <ul className="space-y-1">
                                        {section.items.length > 0 ? (
                                            section.items.map((item) => (
                                                <li key={item}>
                                                    <Link
                                                        href={`/${section.title.toLowerCase().replace(/\s+/g, "-")}/${item
                                                            .toLowerCase()
                                                            .replace(/\s+/g, "-")}`}
                                                        className="hover:text-indigo-600 text-gray-600"
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-gray-400">Coming Soon</li>
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Search */}
                <div className="flex-1 mx-4 z-10">
                    <input
                        type="text"
                        placeholder="Search Your Products..."
                        className="w-full h-10 rounded-md border border-indigo-600 px-3 text-sm"
                    />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-10">
                    <Link href="/cart" className="relative">
                        <ShoppingCart className="h-7 w-7 text-indigo-900" />
                        <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                            2
                        </span>
                    </Link>
                    <Link href="/account">
                        <User2 className="h-7 w-7 text-indigo-900" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
