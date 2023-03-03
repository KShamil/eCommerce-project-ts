import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import "react-toastify/dist/ReactToastify.css";
import AddProductButton from "../components/Buttons/AddProductButton";
import { useEffect } from "react";

const WishlistPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  interface WishlistProps {
    isWishlistEmpty:boolean;
    totalWishlistItems:number;
    items:any;
    removeWishlistItem:(id: number) => void;
  }

  const { isWishlistEmpty, totalWishlistItems, items, removeWishlistItem } =
    useWishlist() as unknown as WishlistProps;

  if (isWishlistEmpty)
    return (
      <h1 className="mt-5 d-flex justify-content-center">
        Your wishlist is empty
      </h1>
    );

  return (
    <>
      <div className="wishlist col-lg-12 container mt-5">
        <div className="mb-8">
          <h1 className="top-title mb-1 fw-bold">
            My Wishlist
          </h1>
          <p className="subtitle">
            There are{" "}
            <span className="text-danger fw-bold">{totalWishlistItems}</span>{" "}
            products in this wishlist.
          </p>
        </div>
        <div>
          <div className="table-responsive">
            <table className="table bg-body">
              <thead className="table-danger">
                <tr>
                  <th className="id">ID</th>
                  <th />
                  <th className="products">Product</th>
                  <th className="actions">Actions</th>
                  <th className="remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item:any, i:any) => (
                  <tr>
                    <td className="align-middle"></td>
                    <td className="align-middle">
                      <Link to="">
                        <img
                          src={item.photo}
                          style={{
                            width: "100%",
                            maxWidth: "100px",
                            minWidth: "70px",
                          }}
                          className="icon-shape icon-xxl"
                          alt="error"
                        />
                      </Link>
                    </td>
                    <td className="align-middle">
                      <div>
                        <h5 className="fs-6 mb-0">
                          <Link to="" className="title text-inherit">
                            {item.title}
                          </Link>
                        </h5>
                        <small className="price text-danger fw-bold">
                          {item.price} azn
                        </small>
                        <p>
                          <small className="badge bg-success">In Stock</small>
                        </p>
                      </div>
                    </td>
                    <td className="align-middle">
                      <AddProductButton
                        addProduct={item}
                      />
                    </td>
                    
                    <td className="align-middle ">
                      <Link
                      to=""
                        onClick={() => {
                          removeWishlistItem(item.id);
                        }}
                        className="text-danger"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Delete"
                        data-bs-original-title="Delete"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
