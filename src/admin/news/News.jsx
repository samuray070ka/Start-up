import React, { useState } from 'react';
import './News.css';

function News() {
  const [openForm, setOpenForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("yangiliklar");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      content: desc,
      imageUrl: image,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      category: category
    };

    try {
      const response = await fetch("http://localhost:8080/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setMessage("✅ Yangilik muvaffaqiyatli qo'shildi!");
        setTitle("");
        setDesc("");
        setImage("");
        setCategory("yangiliklar");
        setOpenForm(false);
      } else {
        setMessage("❌ Xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Server bilan aloqa yo‘q!");
    }
  };

  return (
    <div className="news">
      <h2>Yangiliklar</h2>

      <button className="add-news-btn" onClick={() => setOpenForm(!openForm)}>
        ➕ Yangilik qo'shish
      </button>

      {openForm && (
        <form className="news-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Sarlavha" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Tavsif" 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Rasm URL" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="cs1.6">Counter Strike 1.6</option>
            {/* <option value="zapallar">Zapallar</option> */}
            <option value="yangiliklar">Yangiliklar</option>
          </select>
          <button type="submit">Saqlash</button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default News;