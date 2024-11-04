
//import logo from '../assets/logo.png';
import logotrang from '../assets/logotrang.jpg';
import Button from '@mui/material/Button';
function menu() {

  return (
    <>
     <ul className="flex gap-[50px] absolute text-stone-900">
        <li><img width={100} src={logotrang} alt="" /></li>

        <li><Button variant="text">Home</Button></li>
        <li><Button variant="text">Shop</Button></li>
        <li><Button variant="text">Contact</Button></li>
        <li><Button variant="text">News</Button></li>
        <li><Button variant="outlined">Đăng nhập</Button></li>
        <li><Button variant="outlined">Đăng ký</Button></li>
     </ul>
    

    </>
  )
}

export default menu