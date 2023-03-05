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

  const updateField = (field: string, value: string | number) => {
    switch (field) {
      case "photo":
        setPhoto(value as string);
        break;
      case "photo2":
        setPhoto2(value as string);
        break;
      case "photo3":
        setPhoto3(value as string);
        break;
      case "photo4":
        setPhoto4(value as string);
        break;
      case "title":
        setTitle(value as string);
        break;
      case "price":
        setPrice(value as string);
        break;
      case "salePrice":
        setSalePrice(value as string);
        break;
      case "rating":
        setRating(parseInt(value as string));
        break;
      case "category":
        setCategory(value as string);
        break;
      case "color":
        setColor(value as string);
        break;
      default:
        break;
    }
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
                onChange={(e) => updateField("photo", e.target.value)}
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
                onChange={(e) => updateField("photo2", e.target.value)}
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
                onChange={(e) => updateField("photo3", e.target.value)}
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
                onChange={(e) => updateField("photo4", e.target.value)}
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
                onChange={(e) => updateField("title", e.target.value)}
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
                onChange={(e) => updateField("price", e.target.value)}
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
                onChange={(e) => updateField("salePrice", e.target.value)}
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
                onChange={(e) => updateField("rating", e.target.value)}
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
                onChange={(e) => updateField("category", e.target.value)}
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
                onChange={(e) => updateField("color", e.target.value)}
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
