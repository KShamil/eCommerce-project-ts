import React,{useState} from "react";
import { Rating } from "@mui/material";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../../config/i18n';
import { useTranslation } from "react-i18next";



interface SaleCardType {
    id:string,
    img: string;
    title: string;
    price:number | string;
    salePrice:number | string;
    rating?: number;
    addProduct?: any;
    addWishlist?: any;
}


const SaleCard:React.FC<SaleCardType> = ({ id,img, title, price, rating, salePrice, addProduct,addWishlist }) => {
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const notify = () => toast("Cart added!");
  const notifyWishlist = () => toast("Wishlist added!");
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const { t, i18n } = useTranslation();

  let icon = addedToWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  const handleAddToWishlist = () => {
    setAddedToWishlist(true);
    addWishlistItem(addWishlist);
    notifyWishlist();
  };
  const handleAddToCart = () => {
    addItem(addProduct);
    notify();
  };
  return (
    <>
      <div className="card-body position-relative border border-muted bg-body p-3" style={{minHeight:'448px'}}>
        <div className="text-center position-relative ">
        <Link to="" onClick={handleAddToWishlist} className=" position-absolute top-0 end-0 fs-5 text-danger">
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
          <div className=" position-absolute top-0 start-0">
            <span className="badge bg-danger text-white">Sale</span>
          </div>
          <Link to={`/${id}`}>
          <img
            src={img}
            alt="Grocery Ecommerce Template"
            className="mb-3 img-fluid p-4"
          />
          </Link>
          <div className="product-action-btn">
            <a
              href="#!"
              className="btn-action mb-1"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
              tabIndex={-1}
            >
              <i
                className="bi bi-eye"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                aria-label="Quick View"
                data-bs-original-title="Quick View"
              />
            </a>
            <a
              href="#!"
              className="btn-action mb-1"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              aria-label="Wishlist"
              data-bs-original-title="Wishlist"
              tabIndex={-1}
            >
              <i className="bi bi-heart" />
            </a>
            <a
              href="#!"
              className="btn-action"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              aria-label="Compare"
              data-bs-original-title="Compare"
              tabIndex={-1}
            >
              <i className="bi bi-arrow-left-right" />
            </a>
          </div>
        </div>
        <h2 className="fs-6">
          <span
            className="text-inherit text-dark"
            tabIndex={-1}
          >
            {title.substring(0, 20)}
          </span>
        </h2>
        <div>
          <span className="text-muted small">
            <Rating
              name="half-rating"
              defaultValue={rating}
              precision={0.5}
              size="small"
            />
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <span className="text-danger">{salePrice}</span>{" "}
            <span className="text-decoration-line-through text-muted">
              {price} azn
            </span>
          </div>
          <div>
            <span className="badge bg-success small text-white">In Stock</span>
          </div>
        </div>
        <div>
          <div className="d-grid mt-4">
            <button onClick={handleAddToCart} className="btn btn-primary rounded-3 fw-bold" tabIndex={-1}>
              {t("changeSliderCardLanguage.addtocart")}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleCard;
