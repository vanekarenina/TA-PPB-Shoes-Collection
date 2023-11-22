import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Puma from './Pages/Puma';
import Adidas from './Pages/Adidas';
import AirJordan from './Pages/AirJordan';
import Details from './Pages/Details';
import './App.css';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi untuk mengalihkan navigasi dan menangani navigasi responsif
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);

    // Mengalihkan navigasi responsif berdasarkan status saat ini
    const responsiveNav = document.querySelector('.responsive-nav');
    responsiveNav.classList.toggle('show', !isNavVisible);

    // Menambahkan logika untuk mengalihkan ke rute yang diinginkan
    if (!isNavVisible) {
      navigate('/Home');
    }
  };

  // Fungsi untuk menutup navigasi
  const closeNav = () => {
    setIsNavVisible(false);
  };

  // Fungsi untuk mendapatkan kelas tautan navigasi berdasarkan jalur saat ini
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'iconwrapper active-link' : 'iconwrapper';
  };

  // Periksa apakah halaman saat ini bukan halaman Home
  const isToggleVisible = location.pathname !== '/Home';

  // Status untuk melacak lebar layar
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Perbarui lebar jendela saat ukurannya berubah
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Tambahkan pendengar peristiwa saat diubah ukurannya
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="containerhead">
          <h1>Shoes Collection</h1>
        </div>
      </header>
      <div className="content" onClick={closeNav}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Puma" element={<Puma />} />
          <Route path="/Adidas" element={<Adidas />} />
          <Route path="/AirJordan" element={<AirJordan />} />
          <Route path="/about" element={<About />} />
          <Route path="/Details/:brand/:productId" element={<Details />} />
        </Routes>
      </div>
      <footer>
        {isToggleVisible && (
          <div className="containernav">
            <Link to="/Home" className={getNavLinkClass('/Home')}>
              Home
            </Link>
            <Link to="/Puma" className={getNavLinkClass('/Puma')}>
              Puma
            </Link>
            <Link to="/Adidas" className={getNavLinkClass('/Adidas')}>
              Adidas
            </Link>
            <Link to="/AirJordan" className={getNavLinkClass('/AirJordan')}>
              Air Jordan
            </Link>
            <Link to="/about" className={getNavLinkClass('/about')}>
              About
            </Link>
          </div>
        )}
        {isToggleVisible && windowWidth <= 600 && (
          <div className="responsive-nav">
            <Link to="/Home" onClick={closeNav}>
              Home
            </Link>
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
