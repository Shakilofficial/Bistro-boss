import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quote from '../../assets/icon/quote.svg'
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="Testimonials"
      ></SectionTitle>
      <div className="my-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center my-8 mx-28 space-y-8">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <img className="h-16 w-16" src={quote} alt="" />
                <p>{review.details} </p>
                <h4 className="text-xl font-semibold text-amber-600 uppercase">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
