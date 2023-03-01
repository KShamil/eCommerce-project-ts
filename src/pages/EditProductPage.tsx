import React from "react";
import { useState,useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ProductType } from "../data/productsData";

const EditProductPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [products, setProducts] = useContext(ProductContext);
  const { id } = useParams();
  const editProduct = products.find((p) => p.id === id);

  const [photo, setPhoto] = useState<string>(editProduct?.photo || "");
  const [photo2, setPhoto2] = useState<string>(editProduct?.photo2 || "");
  const [photo3, setPhoto3] = useState<string>(editProduct?.photo3 || "");
  const [photo4, setPhoto4] = useState<string>(editProduct?.photo4 || "");
  const [title, setTitle] = useState<string>(editProduct?.title || "");
  const [price, setPrice] = useState<number | string>(editProduct?.price || "");
  const [salePrice, setSalePrice] = useState<number | string>(
    editProduct?.salePrice || ""
  );
  const [rating, setRating] = useState<number | string>(editProduct?.rating || "");
  const [category, setCategory] = useState<string>(editProduct?.category || "");
  const [color, setColor] = useState<string>(editProduct?.color || "");
  const navigate = useNavigate();

  const handleEditProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedProduct: ProductType = {
      id: editProduct?.id || uuidv4(),
      photo,
      photo2,
      photo3,
      photo4,
      title,
      price,
      salePrice,
      rating,
      category,
      color,
    };
    setProducts((prevProducts: ProductType[]) =>
      prevProducts.map((p: ProductType) =>
        p.id === editProduct?.id ? updatedProduct : p
      )
    );
    navigate("/dashboard");
  };

  const handleEditPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.value);
  };
  const handleEditPhoto2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto2(e.target.value);
  };
  const handleEditPhoto3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto3(e.target.value);
  };
  const handleEditPhoto4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto4(e.target.value);
  };
  const handleEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleEditPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleEditSalePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalePrice(e.target.value);
  };
  const handleEditRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };
  const handleEditCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const handleEditColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="dashboard p-5">
        <div className="dashboard-content container col-8 bg-dark p-3">
          <form onSubmit={handleEditProduct}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Photo
              </label>
              <input
                value={photo}
                onChange={handleEditPhoto}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Photo2
              </label>
              <input
                onChange={handleEditPhoto2}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Photo3
              </label>
              <input
                onChange={handleEditPhoto3}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Photo4
              </label>
              <input
                onChange={handleEditPhoto4}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-white"
              >
                Title
              </label>
              <input
                onChange={handleEditTitle}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-white"
              >
                Price
              </label>
              <input
                onChange={handleEditPrice}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Sale Price
              </label>
              <input
                onChange={handleEditSalePrice}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Rating
              </label>
              <input
                onChange={handleEditRating}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Category
              </label>
              <input
                onChange={handleEditCategory}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Color
              </label>
              <input
                onChange={handleEditColor}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="add-btn btn btn-primary">
              Edit Card
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProductPage;
