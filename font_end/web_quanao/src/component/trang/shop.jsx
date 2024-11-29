import Menu from '../menu.jsx'
//import Banner from '../baner.jsx'
import ProductCardList from '../productCardList.jsx'
import ListSP from '../listSP.jsx'
import Footer2 from '../footer2.jsx'
import Filter from '../filters.jsx'
//import AddproductForm from '../addProductForm.jsx'
function shop(){
    return (
        <div className=' flex flex-col  gap'>
            <div className=' h-[120px] '><Menu  /></div>
            {/* <Banner /> */}
            <div className='   left-4  '><Filter /></div>

            <div className='  top-4'><ProductCardList /></div>
            <div className='flex'> 
            <div className='  top-4'><ListSP /></div>
            <div className='  top-4'><ListSP /></div>
            <div className='  top-4'><ListSP /></div>
            </div>
           
           <div className='  bottom-0'><Footer2 /></div> 
        </div>
    )
}
export default shop