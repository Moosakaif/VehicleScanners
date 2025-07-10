// components/ImageSlider.jsx
import Slider from "react-slick";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const images = [
    "/website 1.png",
    "/slider-2.png",
  ];

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={500}
              height={300}
              className="rounded-xl object-cover w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
