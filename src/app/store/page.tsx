"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCard from "./ProductCard";

export default function StorePage() {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <div className="text-white">
      <h1 className="text-center text-4xl">ویترین فروشگاه</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} isAdmin={false} />
        ))}
      </div>
    </div>
  );
}
