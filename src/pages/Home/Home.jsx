import Banner from "../../components/Banner/Banner";
import CallUs from "../../components/Banner/CallUs";
import InfoBanner from "../../components/Banner/InfoBanner";
import Featured from "../../components/Featured/Featured";
import Testimonials from "../../components/Testimonials/Testimonials";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Recommend from "./Recommend/Recommend";

const Home = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <Category />
      <InfoBanner />
      <PopularMenu />
      <CallUs />
      <Recommend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
