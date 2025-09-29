import React from "react";
import { Zap, ArrowRightCircle, Package, MapPin, Truck, LogIn } from "lucide-react";

import Link from "next/link";

export default function TopNav() {
    return (
        <div className="w-full bg-zinc-100 text-[13px] h-[40px] pr-10">
            <div className=" h-full mx-auto flex items-stretch gap-2 px-2 ">
                {/* Left promo pill */}
                <div className=" w-[50%]">
                    <Link
                        href="#"
                        className="h-full w-fit flex items-center gap-2 whitespace-nowrap  bg-indigo-800 px-3 py-1 text-white shadow-sm hover:bg-indigo-700"
                    >
                        <Zap className="h-4 w-4 text-yellow-300" />
                        <span className="font-semibold tracking-wide">EXCLUSIVE T-SHIRTS ON SALE</span>
                        <span className="opacity-70">|</span>
                        <span className="opacity-90">Limited time only</span>
                        <ArrowRightCircle className="ml-1 h-4 w-4 opacity-90" />
                    </Link>
                </div>

                <div className=" w-[50%] flex justify-between  ">
                    {/* Left links */}
                    <div className="flex gap-1 w-[50%] ">
                        <Link
                            href="#"
                            className="flex w-full justify-center items-center gap-2  bg-indigo-800 px-3 py-1 text-white hover:bg-indigo-700"
                        >
                            <Package className="h-4 w-4" />
                            <span>Order Bulk / Corporate Sales</span>
                        </Link>
                        
                        <Link
                            href="#"
                            className="flex w-full justify-center items-center gap-2  bg-indigo-800 px-3 py-1 text-white hover:bg-indigo-700"
                        >
                            <MapPin className="h-4 w-4" />
                            <span>Store Locations</span>
                        </Link>
                    </div>
                    {/* Right links */}
                    <div className="flex  items-center gap-20 text-zinc-700">
                        <Link href="#" className="flex items-center gap-2 hover:text-zinc-900">
                            <Truck className="h-4 w-4" />
                            <span>Order Tracking</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-zinc-900">
                            <LogIn className="h-4 w-4" />
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
                
            </div>


        </div>
    );
}
