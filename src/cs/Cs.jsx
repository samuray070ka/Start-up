import React from 'react'
import './Cs.css'
import img1 from '../admin/assets/gettyimages-1152338762-640x640.jpg'

function Cs() {
  return (
    <>
    <div className='cs'>
        <div className="dark_second">
            <div className="cs_box">
            <h1>Counter strike 1.6 dagi yangiliklarga xush kelibsiz !</h1>
            <p>Bu yerda counter strike dagi holatlarni kuzatib borishingiz mumkin!</p>
            </div>
        </div>
    </div>

    <div className="filter">
       <button className='filter_btn'>Filter</button>
        <select className='select'>
          <option value="1">Bugungi uyinlar</option>
          <option value="2">Yaqin 3 kundagi uyinlar</option>
          <option value="3">1 Haftalik yoki undanda oldingi uyinlar</option>
        </select>
    </div>

    <div className='hr'>
        <button>Bugungi uyinlar</button>
        <div className='hr_hr'> </div>
    </div>
    <div className="cs_cards">
        <div className="cs_card">
            <img src={img1} alt="" />
            <p>Komanda: <button>m1</button><button>999</button><button>12</button><button>Mansurovvv</button><button>AdoT1</button></p>
            <h5>VS</h5>
            <p>Komanda: <button>Aziz_chik</button><button>Maxmudovvv</button><button>707</button><button>Po'lat</button><button>Abi</button></p>
        </div>
    </div>


    <div className='hr second'>
        <button>Yaqin 3 kundagi uyinlar</button>
        <div className='hr_hr'> </div>
    </div>
    <div className="cs_cards">
        <div className="cs_card">
            <img src={img1} alt="" />
            <p>Komanda: <button>m1</button><button>999</button><button>12</button><button>Mansurovvv</button><button>AdoT1</button></p>
            <h5>VS</h5>
            <p>Komanda: <button>Aziz_chik</button><button>Maxmudovvv</button><button>707</button><button>Po'lat</button><button>Abi</button></p>
        </div>
    </div>
    <div className='hr second'>
        <button>1 Haftalik yoki undanda oldingi uyinlar</button>
        <div className='hr_hr'> </div>
    </div>
    <div className="cs_cards">
        <div className="cs_card">
            <img src={img1} alt="" />
            <p>Komanda: <button>m1</button><button>999</button><button>12</button><button>Mansurovvv</button><button>AdoT1</button></p>
            <h5>VS</h5>
            <p>Komanda: <button>Aziz_chik</button><button>Maxmudovvv</button><button>707</button><button>Po'lat</button><button>Abi</button></p>
        </div>
    </div>
    </>
  )
}

export default Cs