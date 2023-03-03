import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

const ShoppingCartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn");
    if (isUserLoggedIn) {
      setIsLoggedIn(true);
    }
    const isUserAuthorized = localStorage.getItem("isAuthorized");
    if (isUserAuthorized) {
      setIsAuthorized(true);
    }
  }, []);

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      alert("Please log in to continue.");
    } else if (!isAuthorized) {
      window.location.href = "/signin";
    } else {
      alert("Thank you for your purchase!");
    }
  };


  interface CartProps {
    isEmpty: boolean;
    items: any;
    updateItemQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
    cartTotal: number;
    totalItems: number;
  }
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    totalItems,
  } = useCart() as unknown as CartProps;

  if (isEmpty) {
    return (
      <div className="text-center P-5 bg-white">
        <img
          src="https://media0.giphy.com/media/WAQiH273h7nTChAbHu/giphy.webp?cid=ecf05e47uosnqyj41oeepdbfnn8p1fr80tx6btx0d0de00rs&rid=giphy.webp&ct=g"
          alt=""
        />
      </div>
    );
  }
  return (
    <>
      <div className="shopping-cart col-lg-12 container mt-5">
        <div className="mb-8">
          <h1 className="top-title mb-1"style={{fontFamily:'Cinzel'}}>My Shopping Cart</h1>
          <p className="subtitle" style={{fontFamily:'Cinzel'}}>There are <span className="text-danger fw-bold">{totalItems}</span> products in this cartlist.</p>
          <h4 className="text-danger"style={{fontFamily:'Cinzel'}}>Subtotal: {cartTotal} azn</h4>
        </div>
        <div>
          <div className="cartlist table-responsive">
            <table className="table table-with-checkbox bg-body">
              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th />
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="t-body">
                {items.map((item:any, i:any) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td className="align-middle">
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
                    </td>
                    <td className="align-middle">
                      <div>
                        <h5 className="title mb-0 fs-6">{item.title}</h5>
                        <small className="text-decoration-line-through text-muted fw-bold">
                        {item.salePrice}
                        </small>
                        <br />
                        <small className="price text-danger fw-bold mt-1">
                          {item.price} azn
                        </small>
                        <p><span className="badge bg-success">In Stock</span></p>
                        
                      </div>
                    </td>
                    <td className="quantitu align-middle">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="decrement btn btn-danger mx-2 rounded-pill"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="increment btn btn-danger mx-2 rounded-pill"
                      >
                        +
                      </button>
                    </td>
                    <td className="align-middle ">
                      <Link to=""
                        onClick={() => {
                          removeItem(item?.id);
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
            <div className="buy-box">
              <button onClick={handleBuyNow} className="btn btn-danger w-100 p-3">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;

