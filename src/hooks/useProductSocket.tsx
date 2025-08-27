import { socket } from "../socket";

export const useProductSocket = () => {
  const addNewProduct = (product: Product) =>
    socket.emit("addProduct", product);
  const editProduct = (product: Product) =>
    socket.emit("updateProduct", product);
  const removeProduct = (id: string) => socket.emit("deleteProduct", id);

  return { addNewProduct, editProduct, removeProduct };
};
