import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { socket } from "../socket";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../redux/ProductSlice";

function SocketListeners() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAdd = (product: Product) => dispatch(addProduct(product));
    const handleUpdate = (product: Product) => dispatch(updateProduct(product));
    const handleDelete = (id: string) => dispatch(deleteProduct(id));

    socket.on("productAdded", handleAdd);
    socket.on("productUpdated", handleUpdate);
    socket.on("productDeleted", handleDelete);

    return () => {
      socket.off("productAdded", handleAdd);
      socket.off("productUpdated", handleUpdate);
      socket.off("productDeleted", handleDelete);
    };
  }, [dispatch]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SocketListeners />
      {children}
    </Provider>
  );
}
