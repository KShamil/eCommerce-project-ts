import React, { useContext,useEffect,useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import {ProductType} from "../data/productsData";
import { Pagination } from "@mui/material";


const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [products, setProducts] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const totalPages: number = Math.ceil(
    Object.keys(products).length / itemsPerPage
  );
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentData: ProductType[] = Object.values(products).slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
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
            {currentData.map((item, i) => (
              <tr key={i}>
                <th scope="row w-25">
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
                <td className="w-50">{item.title}</td>
                <td className="w-25">{item.price}</td>
                <td className="actions">
                  <Link style={{width:"100px"}} to={`/editproduct/${item.id}`} className="btn btn-primary mb-2">
                    Edit
                  </Link>
                  <br />
                  <button
                    style={{width:"100px"}}
                    onClick={() => handleDeleteProduct(item.id)}
                    className="btn btn-danger d-flex justify-content-center"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination d-flex justify-content-center">
        <Pagination
          style={{background:"white"}}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color={"primary"}
        />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
