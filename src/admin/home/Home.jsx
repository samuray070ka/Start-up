import React from 'react'
import './Home.css'
// import {Link} from "react-router-dom"
import img1 from '../assets/gettyimages-1152338762-640x640.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Home() {
  return (
    <>
    <div className='home'>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper_box'>
                <div className='dark'>
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ad consequuntur facere ducimus culpa, quisquam iusto, libero veritatis ullam, odio tempore itaque animi excepturi. Iure suscipit labore quibusdam vel perferendis?</h2>
                    <button>Yangiliklarni ko'rish</button>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='swiper_box'>
                <div className='dark'>
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ad consequuntur facere ducimus culpa, quisquam iusto, libero veritatis ullam, odio tempore itaque animi excepturi. Iure suscipit labore quibusdam vel perferendis?</h2>
                    <button>Yangiliklarni ko'rish</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div className="filter">
       <button className='filter_btn'>Filter</button>
        <select className='select'>
          <option value="1">Yaqinda kiritilgan yangiliklar</option>
          <option value="2">Counter Strike 1.6 yangiliklar</option>
          <option value="3">Zapallar</option>
        </select>
    </div>

    <div className="all">
            <div className='all_box'>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className='all_box right'>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className='all_box'>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>

            <div className='all_box right'>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className='all_box '>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className='all_box '>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>

            <div className='all_box '>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className='all_box '>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className='all_box right '>
                <img src={img1} alt="" />
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
    </div>
    
    <div className="nick">
        <button className='nick_btn'>Counter Strike 1.6 nickname</button>
        <div className='nick_list'>
            <button className='nick_item'>m1</button>
            <button className='nick_item'>999</button>
            <button className='nick_item'>12</button>
            <button className='nick_item'>Mansurovvv</button>
            <button className='nick_item'>Po'lat</button>
            <button className='nick_item'>707</button>
            <button className='nick_item'>AdoT1</button>
            <button className='nick_item'>Maxmudovvv</button>
            <button className='nick_item'>Aziz_chik</button>
        </div>
    </div>
    </>
  )
}

export default Home