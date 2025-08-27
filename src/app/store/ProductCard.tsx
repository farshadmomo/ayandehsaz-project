import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../redux/ProductSlice";

type Props = {
  product: Product;
  isAdmin?: boolean;
  onEdit?: (product: Product) => void;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductCard = ({ product, isAdmin, onEdit, setIsEditing }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("deleting product with id:", product.id);
    dispatch(deleteProduct(product.id));
  };

  const handleUpdate = () => {
    setIsEditing?.(true);
    if (onEdit) onEdit(product);
  };

  return (
    <div className="border p-4 h-90 flex flex-col bg-gray-800 gap-2" dir="rtl">
      <div className="w-full margin-4 bg-green-900 h-full"></div>
      <h2 className="text-xl">{product.name}</h2>
      <p>{product.price} تومان</p>
      <p>موجودی: {product.stock}</p>
      {isAdmin ? (
        <div className="flex justify-between">
          <button
            className="bg-red-500 p-2 rounded cursor-pointer"
            onClick={handleDelete}
          >
            حذف محصول
          </button>
          <button
            className="bg-yellow-500 p-2 rounded cursor-pointer"
            onClick={handleUpdate}
          >
            ویرایش محصول
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;
