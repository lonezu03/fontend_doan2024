import DetailItem from '../chitietSP.jsx'
import Description from '../description.jsx';
import Menu from '../menu.jsx'
import Footer2 from '../footer2.jsx'

function chitietSPComponent(){
    return(
        <>
                   <div className=' h-[120px] '><Menu  /></div>
            <DetailItem />
            <Description />
            <Footer2 />
        </>
    )
};

export default chitietSPComponent;