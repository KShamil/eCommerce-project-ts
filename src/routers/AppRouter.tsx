import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import Header from "../components/Layout/Header";
import { ProductProvider } from "../context/ProductContext";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CorporativeSalesPage from "../pages/CorporativeSalesPage";
import DetailsPage from "../pages/DetailsPage";
import Faqs from "../pages/Faqs";
import ProductsFilterPage from "../pages/ProductsFilterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SellingPage from "../pages/SellingPage";
import Services from "../pages/ServicesPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import ShopsPage from "../pages/ShopsPage";
import SignUpPage from "../pages/SignUpPage";
import SpecialOffersPage from "../pages/SpecialOffersPage";
import WishlistPage from "../pages/WishlistPage";
import Footer from "../components/Layout/Footer";
import NotFoundPage from "../pages/NotFoundPage";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import { ScrollToTop } from "react-simple-scroll-up";
import UserPage from "../pages/UserPage";
// import { FloatingWhatsApp } from "react-floating-whatsapp";

const AppRouter = () => {
  
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <Header searchValue={handleSearch} />
            <Routes>
              <Route path="/" element={<Home search={search} />}></Route>
              <Route path="/corporative" element={<CorporativeSalesPage />}></Route>
              <Route path="/:id" element={<DetailsPage />}></Route>
              <Route path="/faqs" element={<Faqs />}></Route>
              <Route path="/filterpage" element={<ProductsFilterPage search={search} />}></Route>
              <Route path="/reset" element={<ResetPasswordPage />}></Route>
              <Route path="/selling/:id" element={<SellingPage />}></Route>
              <Route path="/service" element={<Services />}></Route>
              <Route path="/shopping" element={<ShoppingCartPage />}></Route>
              <Route path="/shops" element={<ShopsPage />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/specialoffers" element={<SpecialOffersPage search={search} />}></Route>
              <Route path="/wishlist" element={<WishlistPage />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/addproduct" element={<AddProductPage />}></Route>
              <Route path="/editproduct/:id" element={<EditProductPage />}></Route>
              <Route path="/userpage" element={<UserPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Footer/>
            <ScrollToTop
              bgColor="red"
              offsetTop={500}
            />
            {/* <FloatingWhatsApp
              phoneNumber="+994556801747" 
              accountName={"Shamil"}
              chatMessage="Hello how can we help you?"
              notificationDelay={10}            
              /> */}
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
