
//import logo from '../assets/logo.png';
import logotrang from '../assets/logotrang.jpg';
import Button from '@mui/material/Button';
function menu() {

  return (
    <>
     <ul className="flex gap-[50px] absolute text-stone-900">
        <li><img width={80} src={logotrang} alt="" /></li>

        <li className='relative top-[15px]'><Button variant="text">Home</Button></li>
        <li className='relative top-[15px]'><Button variant="text">Shop</Button></li>
        <li className='relative top-[15px]'><Button variant="text">Contact</Button></li>
        <li className='relative top-[15px]'><Button variant="text">News</Button></li>
        <li className='relative top-[15px]'><Button variant="outlined">Đăng nhập</Button></li>
        <li className='relative top-[15px]'><Button variant="outlined">Đăng ký</Button></li>
     </ul>
    

    </>
  )
}

export default menu