import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
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
