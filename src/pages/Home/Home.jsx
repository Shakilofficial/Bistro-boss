import Banner from "../../components/Banner/Banner";
import InfoBanner from "../../components/Banner/InfoBanner";
import Featured from "../../components/Featured/Featured";
import Testimonials from "../../components/Testimonials/Testimonials";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <Category />
      <InfoBanner />
      <PopularMenu />
      <Featured />
      <Testimonials />
      <h2 className="text-xl font-bold text-center">This is Home</h2>
    </div>
  );
};

export default Home;
