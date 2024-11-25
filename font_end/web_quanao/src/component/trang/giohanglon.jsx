import Menu from '../menu.jsx'
import Giohang from '../giohang.jsx'
import Footer2 from '../footer2.jsx'

const giohanglon = ()=> {
    const cartItems = [
        {
          id: 1,
          name: 'Chic Ballet Flats',
          image: 'url_to_image_1',
          size: 6,
          colors: ['#800080'], // màu tím
          price: 25.18,
          quantity: 2,
          available: 72,
        },
        {
          id: 2,
          name: 'Durable Work Boots',
          image: 'url_to_image_2',
          size: 6,
          colors: ['#FFD700'], // màu vàng
          price: 93.68,
          quantity: 1,
          available: 10,
        },
        {
          id: 3,
          name: 'Classic Leather Loafers',
          image: 'url_to_image_3',
          size: 6,
          colors: ['#0000FF'], // màu xanh dương
          price: 97.14,
          quantity: 1,
          available: 72,
        },
      ];
      
    return (
        <div>
                   <div className=' h-[120px] '><Menu  /></div>
            <div><Giohang cartItems={cartItems}/></div>
            <Footer2 />
        </div>
    )
}

export default giohanglon;