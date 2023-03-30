import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';
import { Photo } from "../types";

interface CarouselProps {
  photos: Photo[];
}

const Carousel = ({ photos }: CarouselProps): JSX.Element => {
  return (
    <div className="carousel" data-testid="test-carousel-view">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="carousel-inner">
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <img
                src={photo.image}
                width="100%"
                alt={photo.title}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
