import './App.css';
import Navbar from './admin/components/Navbar';
import News from './admin/news/News';
import Kulgili from './admin/kulgili/Kulgili';
import Login from './login/Login';
import Home from './admin/home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cs from './cs/Cs';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/news' element={
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        } />
        <Route path='/funny' element={
          <ProtectedRoute>
            <Kulgili />
          </ProtectedRoute>
        } />
        <Route path='/cs' element={
          <ProtectedRoute>
            <Cs />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;