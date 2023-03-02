import React from "react";
import { useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ProductType } from "../data/productsData";

const AddProductPage = () => {
useEffect(() => {
        window.scrollTo(0, 0);
}, []);

  const [photo, setPhoto] = useState<string>("");
  const [photo2, setPhoto2] = useState<string>("");
  const [photo3, setPhoto3] = useState<string>("");
  const [photo4, setPhoto4] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [salePrice, setSalePrice] = useState<string>("");
  const [rating, setRating] = useState<number | undefined>();
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const navigate = useNavigate();

  const [products, setProducts] = useContext(ProductContext);

  const updatePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.value);
  };
  const updatePhoto2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto2(e.target.value);
  };
  const updatePhoto3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto3(e.target.value);
  };
  const updatePhoto4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto4(e.target.value);
  };
  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const updatePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const updateSalePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalePrice(e.target.value);
  };
  const updateRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value));
  }
  const updateCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const updateColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const addCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newProduct: ProductType = {
      id: uuidv4(),
      photo: photo,
      photo2: photo2,
      photo3: photo3,
      photo4: photo4,
      title: title,
      price: price,
      salePrice: salePrice,
      rating: rating || 0,
      category: category,
      color: color,
    };

    setProducts((prevProducts: ProductType[]) => [...prevProducts, newProduct]);
    navigate("/dashboard");
  };
  return (
    <>
      <div className="dashboard p-5">
        <div className="dashboard-content container col-8 bg-dark p-3">
          <form onSubmit={addCard}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                Photo
              </label>
              <input
                onChange={updatePhoto}
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
                onChange={updatePhoto2}
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
                onChange={updatePhoto3}
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
                onChange={updatePhoto4}
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
                onChange={updateTitle}
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
                onChange={updatePrice}
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
                onChange={updateSalePrice}
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
                onChange={updateRating}
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
                onChange={updateCategory}
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
                onChange={updateColor}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="add-btn btn btn-primary">
              Add Card
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
