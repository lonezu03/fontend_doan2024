
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './component/trang/shop.jsx';
import Aboutus from './component/trang/aboutuslon.jsx';
import Dangky from './component/trang/dangky.jsx';
import Dangnhap from './component/trang/dangnhap.jsx';
import ChitietSP from './component/trang/chitiet_sp.jsx';
import Giohanglon from './component/trang/giohanglon.jsx';
import Home from './component/trang/home.jsx';
function App() {


  return (
    <Router>

      <Routes>

        <Route path="/chitietsp/:id" element={<ChitietSP />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/dangky" element={<Dangky />} />
        <Route path="/dangnhap" element={<Dangnhap />} />
        <Route path="/giohang" element={<Giohanglon />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/footer2" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  )
}

export default App
