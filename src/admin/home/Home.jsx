import React, { useEffect, useState } from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Home() {
  const [sliders, setSliders] = useState([]);
  const [news, setNews] = useState([]);
//   const [nicknames, setNicknames] = useState([]);
  const [filter, setFilter] = useState("all"); 
  const [rightIndexes, setRightIndexes] = useState([]); // ✅ stabil random indexlar

  // ✅ backenddan malumot olish
  useEffect(() => {
    fetch("http://localhost:8080/api/sliders")
      .then(res => res.json())
      .then(data => setSliders(data))
      .catch(err => console.error("Sliders fetch error:", err));

    loadNews("all"); // default holatda barcha news

    fetch("http://localhost:8080/api/nicknames")
      .then(res => res.json())
    //   .then(data => setNicknames(data))
      .catch(err => console.error("Nicknames fetch error:", err));
  }, []);

  // ✅ Filterga qarab news olish
  const loadNews = (type) => {
    let url = "http://localhost:8080/api/news";

    if (type === "today") {
      url = "http://localhost:8080/api/news/today";
    } else if (type === "cs1.6") {
      url = "http://localhost:8080/api/news/category/cs1.6";
    } else if (type === "zapallar") {
      url = "http://localhost:8080/api/news/category/zapallar";
    } else if (type === "yangiliklar") {
      url = "http://localhost:8080/api/news/category/yangiliklar";
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setNews(data);

        // ✅ random "right" indexlarni generatsiya qilish
        const newRightIndexes = [];
        for (let i = 0; i < data.length; i += 3) {
          const randomIndex = i + Math.floor(Math.random() * 3);
          if (randomIndex < data.length) {
            newRightIndexes.push(randomIndex);
          }
        }
        setRightIndexes(newRightIndexes);
      })
      .catch(err => console.error("News fetch error:", err));
  };

  // ✅ select filter o'zgarganda
  const handleFilterChange = (e) => {
    const val = e.target.value;
    setFilter(val);
    loadNews(val);
  };

  return (
    <>
      {/* Swiper */}
      <div className='home'>
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
        {Array.isArray(sliders) && sliders.map((item) => (
            <SwiperSlide key={item.id}>
                <div className='swiper_box' style={{ backgroundImage: `url(${item.imageUrl})` }}>
                <div className='dark'>
                  <h2>{item.title}</h2>
                  <button onClick={() => window.location.href = `/news/${item.slug}`}>
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
        ))}
        </Swiper>
      </div>

      {/* Filter */}
      <div className="filter">
        <button className='filter_btn'>Filter</button>
        <select className='select' value={filter} onChange={handleFilterChange}>
          <option value="all">Barcha yangiliklar</option>
          <option value="today">Yaqinda kiritilgan yangiliklar</option>
          <option value="cs1.6">Counter Strike 1.6 yangiliklar</option>
          <option value="zapallar">Zapallar</option>
          <option value="yangiliklar">Yangiliklar</option>
        </select>
      </div>

      {/* News cards */}
      <div className="all">
        {news.map((n, index) => {
          const isRight = rightIndexes.includes(index);
          return (
            <div key={n.id} className={`all_box ${isRight ? 'right' : ''}`} onClick={() => window.location.href = `/news/${n.slug}`}>
              <img src={n.imageUrl} alt="" />
              <h1>
                {n.title}
              </h1>
            </div>
          );
        })}
      </div>

      {/* Nicknames */}
      <div className="nick">
        <button className='nick_btn'>Counter Strike 1.6 nickname</button>
        <div className='nick_list'>
            <button className='nick_item'>m1</button>
            <button className='nick_item'>999</button>
            <button className='nick_item'>12</button>
            <button className='nick_item'>51</button>
            <button className='nick_item'>123</button>
            <button className='nick_item'>32131</button>
            <button className='nick_item'>10</button>
            <button className='nick_item'>99</button>
            <button className='nick_item'>m2</button>
        </div>
      </div>
    </>
  );
}

export default Home;