import Slider from "../components/Sliders/Slider";
import Banner from "../components/Banner/Banner";
import SpecialOffersSlider from "../components/Sliders/SpecialOffersSlider";
import BestSeller from "../components/Sliders/BestSeller";
import OfferOfTheWeekSlider from "../components/Sliders/OfferOfTheWeekSlider";
import AppleStoreTv from "../components/TV/AppleStoreTv";
import PartnersSlider from "../components/Sliders/PartnersSlider";
import AllProductsSlider from "../components/Sliders/AllProductsSlider";



const Home = () => {
  return (
    <>
      <Slider />
      <Banner />
      <AllProductsSlider/>
      <BestSeller />
      <SpecialOffersSlider />
      <OfferOfTheWeekSlider />
      <AppleStoreTv />
      <PartnersSlider />
    </>
  );
};

export default Home;
