import { Menu } from "lucide-react"
import MenuList from "./menu-list"
import { PopoverContent, PopoverTrigger, Popover } from "./ui/popover"
import Link from "next/link"

const ItemsMenuMobile = () => { 
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/category/hoddies" className="block">Sudaderas</Link>
                <Link href="/category/camisetas" className="block">Camisetas</Link>

            </PopoverContent>

        </Popover>
    )
}

export default ItemsMenuMobile