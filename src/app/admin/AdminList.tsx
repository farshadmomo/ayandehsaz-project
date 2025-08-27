import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCard from "../store/ProductCard";

const AdminList = () => {
  const products = useSelector((state: RootState) => state.products.items);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} isAdmin={true} />
      ))}
    </div>
  );
};

export default AdminList;
