import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useWishlist } from "react-use-wishlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

interface AddWishlistButtonType {
    addWishlist:any
}

const AddWishlistButton:React.FC<AddWishlistButtonType> = ({ addWishlist }) => {
  const { addWishlistItem } = useWishlist();
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const notifyWishlist = () => toast("Wishlist added!");

  let icon = addedToWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  const handleAddToWishlist = () => {
    setAddedToWishlist(true);
    addWishlistItem(addWishlist);
    notifyWishlist();
  };

  return (
    <>
      <Link to="" onClick={handleAddToWishlist} className="text-danger">
        {icon}
      </Link>
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

export default AddWishlistButton;
