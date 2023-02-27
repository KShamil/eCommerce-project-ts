import React, { useContext,useEffect,useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";


const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [products, setProducts] = useContext(ProductContext);
  const handleDeleteProduct = (id: any) => {
    setProducts(products.filter((products) => products.id !== id));
  };
  return (
    <>
      <div className="dashboard container mt-5">
        <div className="add-product-button">
          <Link to="/addproduct" className="btn btn-success">
            Add New Product
          </Link>
        </div>
        <table className="table bg-body mt-3">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={i}>
                <th scope="row">
                  <img
                    style={{
                      width: "100%",
                      maxWidth: "150px",
                      minWidth: "70px",
                    }}
                    src={item.photo}
                    alt="error"
                  />
                </th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td className="actions">
                  <Link to={`/editproduct/${item.id}`} className="btn btn-primary mb-2 w-50">
                    Edit
                  </Link>
                  <br />
                  <button
                    onClick={() => handleDeleteProduct(item.id)}
                    className="btn btn-danger w-50 d-flex justify-content-center"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
