import React from 'react';
import './testimonials.css';
import { Data } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section id='testi' className="testi container section">
        <h2 className="section-title">Testimonials</h2>
        <span className="section-subtitle">My Client Says</span>

        <Swiper className="testi-container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
              
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, image, title, descreption}) => {
                return (
                    <SwiperSlide className="testi-card" key={id}>
                        <img src={image} alt="" className="testi-img" />

                        <h3 className="testi-name">{title}</h3>

                        <p className="testi-descreption">{descreption}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials