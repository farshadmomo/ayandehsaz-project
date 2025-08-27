import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCard from "../store/ProductCard";

type Props = {
  onEdit: (product: Product) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminList = ({ onEdit, setIsEditing }: Props) => {
  const products = useSelector((state: RootState) => state.products.items);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {products.map((p, index) => (
        <ProductCard
          key={p.id}
          product={p}
          isAdmin={true}
          onEdit={onEdit}
          setIsEditing={setIsEditing}
        />
      ))}
    </div>
  );
};

export default AdminList;
