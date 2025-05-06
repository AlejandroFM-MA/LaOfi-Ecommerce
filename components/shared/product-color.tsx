

interface ProductColor {
    color: string
}

const ProductColor = (props: ProductColor) => {
    const { color } = props

    return (
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-xs text-white
             bg-black rounded-full dark:bg-white dark:text-black w-fit">
                {color}
            </p>
        </div>
    );
}

export default ProductColor;