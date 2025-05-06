import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { ProductType } from "@/types/product"
import { toast } from 'sonner'

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
            // Usamos toast.error() para mensajes destructivos
            return toast.error("El producto ya existe en el carrito.");
        }

        set({
            items: [...get().items, data]
        })

        // Usamos toast.success() para mensajes exitosos
        toast.success("Producto añadido al carrito 🛍️");
    },
    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast("Producto eliminado del carrito 🗑️"); // Mensaje simple
    },

    removeAll: () => set({ items: [] })
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))
