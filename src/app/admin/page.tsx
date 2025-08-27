"use client";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/ProductSlice";
import { v4 as uuid } from "uuid";
import AdminList from "./AdminList";

export default function AdminPage() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addProduct({ id: uuid(), name: "محصول تستی", price: 100000, stock: 5 })
    );
  };

  return (
    <div className="text-white">
      <button onClick={handleAdd} className="bg-blue-500 p-2 rounded">
        افزودن محصول
      </button>
      <h1 className="text-center text-4xl">پنل مدیریت</h1>
      <AdminList />
    </div>
  );
}
