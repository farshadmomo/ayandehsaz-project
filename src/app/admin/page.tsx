"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../redux/ProductSlice";
import { v4 as uuid } from "uuid";
import AdminList from "./AdminList";
import Modal from "../../components/Modal";

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (editingProduct && isEditing) {
      dispatch(updateProduct({ ...editingProduct }));
    } else if (editingProduct && !isEditing) {
      dispatch(addProduct({ ...editingProduct }));
    }
    setIsOpen(false);
  };

  return (
    <div className="text-white" dir="rtl">
      <h1 className="text-center text-4xl mt-10">پنل مدیریت</h1>
      <button
        className="bg-blue-500 p-2 rounded mt-6 mr-6"
        onClick={() => {
          setIsOpen(true);
          setIsEditing(false);
          setEditingProduct({
            id: uuid(),
            name: "",
            price: 0,
            stock: 0,
          });
        }}
      >
        افزودن محصول
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={isEditing ? "ویرایش محصول" : "افزودن محصول"}
      >
        <div>
          <label className="block mb-2">
            نام محصول:
            <input
              type="text"
              className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
              value={editingProduct?.name || ""}
              onChange={(e) =>
                setEditingProduct((prev) =>
                  prev ? { ...prev, name: e.target.value } : prev
                )
              }
            />
          </label>
          <label className="block mb-2">
            قیمت:
            <input
              type="number"
              className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
              value={editingProduct?.price || ""}
              onChange={(e) =>
                setEditingProduct((prev) =>
                  prev ? { ...prev, price: Number(e.target.value) } : prev
                )
              }
            />
          </label>
          <label className="block mb-2">
            موجودی:
            <input
              type="number"
              className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
              value={editingProduct?.stock || ""}
              onChange={(e) =>
                setEditingProduct((prev) =>
                  prev ? { ...prev, stock: Number(e.target.value) } : prev
                )
              }
            />
          </label>
          <button
            className="bg-green-500 p-2 rounded mt-4"
            onClick={() => {
              setIsOpen(false);
              handleSubmit();
            }}
          >
            {editingProduct ? "ذخیره تغییرات" : "افزودن محصول"}
          </button>
        </div>
      </Modal>
      <AdminList
        setIsEditing={setIsEditing}
        onEdit={(product) => {
          setEditingProduct(product);
          setIsOpen(true);
        }}
      />
    </div>
  );
}
