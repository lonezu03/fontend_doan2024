import Menu from '../menu.jsx'
//import Banner from '../baner.jsx'
import ProductCardList from '../productCardList.jsx'
import ListSP from '../listSP.jsx'
import Footer2 from '../footer2.jsx'
import Filter from '../filters.jsx'
//import AddproductForm from '../addProductForm.jsx'
function shop() {
    return (
        <div className="flex flex-col gap-6 bg-gray-50">
            {/* Header */}
            <header className="h-[120px] bg-white shadow-md sticky top-0 z-10">
                <Menu />
            </header>

            {/* Bộ lọc */}
            <section className="container mx-auto p-4">
                <Filter />
            </section>

            {/* Danh sách sản phẩm */}
            <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                <ProductCardList />
            </main>

            {/* Danh sách SP */}
            <section className="container mx-auto p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">More Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ListSP />
                    <ListSP />
                    <ListSP />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6 mt-8">
                <Footer2 />
            </footer>
        </div>
    )
}
export default shop