import React from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DetailsAddProductButtonType {
    addProduct:any;
}

const DetailsAddProductButton:React.FC<DetailsAddProductButtonType> = ({addProduct}) => {
const { addItem } = useCart();
const notify = () => toast("Cart added!");
  const handleAddedToCart =()=> {
    addItem(addProduct);
    notify();
  }
  return (
    <>
      <button
        onClick={handleAddedToCart}
        type="button"
        className="btn btn-success btn-lg px-4 me-md-2"
      >
        Add to Cart
      </button>
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
    </>
  );
};

export default DetailsAddProductButton;
