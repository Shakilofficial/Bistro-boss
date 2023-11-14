import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl p-24 bg-black bg-opacity-60 h-[340px] uppercase">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-xl font-semibold">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
