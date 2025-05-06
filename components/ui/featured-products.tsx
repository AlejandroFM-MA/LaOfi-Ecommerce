
"use client"


import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import SkeletonShema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./card";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-buttom";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";


const FeaturedProducts = () => {
    const{result, loading}:ResponseType = useGetFeaturedProducts();
    const router =useRouter()
    const {addItem} = useCart()

    console.log(result);
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos mas golfitos</h3>
            <Carousel>
                <CarouselContent className= "-ml-2 md:-ml-4">
            {loading && (
                <SkeletonShema grid ={3} />
            )}
            {result != null && (
                result.map((product: ProductType) => {
                    const { id, slug, images, productName, color, description, price } = product;
                    return (
                        <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                            <div className="p-1">
                                <Card className="py-4 border border-gray-200 shadow-none">
                                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                                         <img 
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} 
                                            alt="Image featured" />
                                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push(`product/${slug}`)} icon={ <Expand size={20}/>} className="text-gray-600" />
                                    
                                    <IconButton onClick={() => addItem(product)} icon={ <ShoppingCart size={20}/>} className="text-gray-600" /> 

                                </div>
                                            </div>
                                    </CardContent>
                                    <div className="flex justify-between gap-4 px-8 ">
                                        <h3 className="tet-lg font-bold px-2 py-1 text-black bg-red-100 rounded-full dark:bg-white dark:text-black w-fit"> {productName}</h3>
                                        <div className="flex items-center justify-between gap-3">
                                    <p className="px-2 py-1 text-black bg-purple-100 rounded-full dark:bg-white dark:text-black w-fit">{price}€</p>

                                        </div>




                                    </div>
                                </Card>

                            </div>

                        </CarouselItem>
                    )
                })
            )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>

        </div>

    );
};
    export default FeaturedProducts;
