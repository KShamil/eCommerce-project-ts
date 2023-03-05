import React from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddProductButtonType {
  addProduct: any;
}

const AddProductButton: React.FC<AddProductButtonType> = ({ addProduct }) => {
  const { addItem } = useCart();
  const notify = () => toast("Cart added!");
  const hundleAddedToCart = () => {
    addItem(addProduct);
    notify();
  };
  return (
    <>
      <button
        onClick={hundleAddedToCart}
        className="add-btn btn btn-primary btn-sm"
      >
        Add to Cart
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </button>
    </>
  );
};

export default AddProductButton;
