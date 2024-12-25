import Menu from '../Navbar2.jsx'
import AboutUs2 from '../aboutus2.jsx'
import Footer2 from '../footer.jsx'
import AOS from "aos";
import React from "react";

function App() {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 50,
        });
        AOS.refresh();
    }, []);
return(<div>
          <div className=' h-[120px] '><Menu  /></div>
    <AboutUs2 />
    <Footer2 />
 
</div>)


};
export default App;