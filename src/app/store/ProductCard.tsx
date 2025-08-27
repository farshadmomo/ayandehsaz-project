import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../redux/ProductSlice";
import { v4 as uuid } from "uuid";

type Props = {
  product: Product;
  isAdmin?: boolean;
};

const ProductCard = ({ product, isAdmin }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("deleting product with id:", product.id);
    dispatch(deleteProduct(product.id));
  };

  const handleUpdate = () => {
    console.log("updating product with id:", product.id);
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
