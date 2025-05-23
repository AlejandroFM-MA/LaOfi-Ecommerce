"use client";

import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import { ProductType } from "@/types/product";
import { useState } from "react";
import SkeletonShema from "@/components/ui/skeletonSchema";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import FiltersControlsCategory from "../components/filters-controls-category";
import ProductCard from "../components/product-card";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug || "");
  const [FilterColor, setFilterColor] = useState("");
  const router = useRouter();

  const filteredProducts =
    result !== null &&
    !loading &&
    (FilterColor === ""
      ? result
      : result.filter(
          (product: ProductType) => product.color === FilterColor
        ));

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && result.length !== 0 && (
        <h1 className="text-3xl font-medium">
          LaOfi {result[0].category.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterColor={setFilterColor} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonShema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos de este color :(</p>
            )}
        </div>
      </div>
    </div>
  );
}