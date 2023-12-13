import "../componenets/slider.css";
import { useState } from "react";
import slide_1 from "../assets/images/slide_1.jpg";
import slide_2 from "../assets/images/slide_2.jpg";
import slide_3 from "../assets/images/slide_3.jpg";
import slide_4 from "../assets/images/slide_4.jpg";
import slide_5 from "../assets/images/slide_5.jpg";

const Slider = () => {
  const images = [slide_1, slide_2, slide_3, slide_4, slide_5];
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSlideForward = () => {
    if (sliderIndex == 4) setSliderIndex(0);
    else setSliderIndex(sliderIndex + 1);
  };
  const handleSlideBackward = () => {
    if (sliderIndex == 0) setSliderIndex(1);
    else setSliderIndex(sliderIndex + 1);
  };
  return (
    <>
      <div id="carouselExample" className="carousel slide shadow">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={images[sliderIndex]}
              className="d-block w-100 slider-image"
              alt="..."
              height={"600px"}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={handleSlideBackward}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={handleSlideForward}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
