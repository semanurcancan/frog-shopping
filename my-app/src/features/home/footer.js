import React from 'react'
import "./home.css";
import { useSelector } from 'react-redux';
import { selectProduct } from '../productList/productSlice';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperLine() {
    const productSwiper = useSelector(selectProduct);

    return (
        <div>
            <div className="slide-container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={5}
                    navigation= {true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {productSwiper.map(user => (
                        <SwiperSlide key={user.id} className="slide">
                            <div className='slide-content'>
                                <img className='product-img' src={user.img} width={100} alt='1.resim' />
                                <div className='slide-text'>
                                    <div> {user.name}</div>
                                    <p>{user.price}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )


}

export default SwiperLine







