"use client"

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "../menu-list";
import ItemsMenuMobile from "../items-menu-mobile";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    const {lovedItems} = useLovedProducts()
    return ( 
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            
            <div className="w-30 h-30 relative" onClick={()=> router.push("/")}>
                <Image
                    src="/GARNET_LOGO_Mesa de trabajo 1.png" 
                    alt="Logo La Ofi"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            
            <div className="items-center justify-between hidden sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {cart.items.length === 0 ?
                    <ShoppingCart strokeWidth="1"
                        className="cursor-pointer"
                        onClick={() => router.push("/cart")}
                    />
                    : (
                        <div className="flex gap-1 cursor-pointer" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                            <span>{cart.items.length}</span>
                        </div>
                    )}

                <Heart strokeWidth="1" className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'  }`} onClick={() => router.push("/loved-products")} />
            </div>
        </div>
    );   
}

export default Navbar;