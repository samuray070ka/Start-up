import React, { useState } from 'react';
import './Login.css';
import { TbUserCircle } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [ism, setIsm] = useState("");
  const [familya, setFamilya] = useState("");
  const [parol, setParol] = useState("");
  const [xabar, setXabar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { ism: ism.toLowerCase(), familya: familya.toLowerCase(), parol };

    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const text = await res.text(); // Har doim text olamiz
      let result;
      try {
        result = JSON.parse(text); // JSON ga parse qilamiz
      } catch {
        setXabar("⚠️ Serverdan noto‘g‘ri javob keldi: " + text);
        return;
      }

      if (result.success) {
        localStorage.setItem("token", result.token);
        const name_res = ism.charAt(0).toUpperCase() + ism.slice(1).toLowerCase();
        localStorage.setItem("name", name_res);
        setXabar("✅ Muvaffaqiyatli kirdingiz!");
        navigate("/"); // Home sahifaga yo‘naltirish
      } else {
        setXabar("❌ " + (result.message || "Login yoki parol noto‘g‘ri!"));
      }
    } catch (error) {
      setXabar("⚠️ Serverga ulanishda xatolik: " + error.message);
    }
  };

  return (
    <div className='login'>
      <TbUserCircle className='prof'/>
      <form onSubmit={handleSubmit}>
        <label>Ismingizni kiriting:</label>
        <input type="text" placeholder='Ismingizni kiriting...' value={ism} onChange={e => setIsm(e.target.value)} />

        <label>Familyangizni kiriting:</label>
        <input type="text" placeholder='Familyangizni kiriting...' value={familya} onChange={e => setFamilya(e.target.value)} />

        <label>Parolingizni kiriting:</label>
        <input type="password" placeholder='Parolingizni kiriting...' value={parol} onChange={e => setParol(e.target.value)} />

        <button type="submit" className='login_btn'>Kirish</button>
      </form>

      {xabar && <p style={{marginTop: "10px"}}>{xabar}</p>}
    </div>
  );
}

export default Login;