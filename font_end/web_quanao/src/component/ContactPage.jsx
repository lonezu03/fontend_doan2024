// ContactPage.jsx
import React from 'react';
import ImgNew1 from "../assets/New/New1.png";
import ImgNew2 from "../assets/New/New2.png";
import ImgNew3 from "../assets/New/New3.png";

const ContactPage = () => {
    return (
        <div className="font-sans">
            {/* Header */}
            <header className="py-4 border-b">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Liên Lạc</h1>

                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto py-8">
                {/* Store Info */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[
                        {
                            image: ImgNew1,
                            title: 'SƯ VẠN HẠNH, QUẬN 10',
                            address: '842 Sư Vạn Hạnh, Phường 12, Quận 10, HCM',
                        },
                        {
                            image: ImgNew2,
                            title: 'NGUYỄN TRÃI, QUẬN 1',
                            address: '26 Nguyễn Trãi, Phường Phạm Ngũ Lão, Quận 1, HCM',
                        },
                        {
                            image: ImgNew3,
                            title: 'CỘNG NGHỆ SÀI GÒN',
                            address: '180 Cao Lỗ, Phường 4, Quận 8, HCM',
                        },
                    ].map((store, index) => (
                        <div key={index} className="border p-4">
                            <img src={store.image} alt={store.title} className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-lg font-semibold mb-2">{store.title}</h2>
                            <p className="text-sm text-gray-600 mb-2">{store.address}</p>
                            <a
                                href="https://levents.asia/pages/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-4 py-2 inline-block text-center"
                            >
                                Xem cửa hàng
                            </a>
                        </div>
                    ))}
                </section>

                {/* Contact Info */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Thông tin liên hệ</h3>
                        <ul className="space-y-4">
                            <li>
                                <button className="bg-black text-white px-4 py-2">0907290127</button>
                            </li>
                            <li>
                                <button className="bg-black text-white px-4 py-2">phanthanhvu@gmail.com</button>
                            </li>
                            <li>
                                <button className="bg-black text-white px-4 py-2">tranhoangminh@gmail.com</button>
                            </li>
                            <li>
                                <button className="bg-black text-white px-4 py-2">vmshop@gmail.com</button>
                            </li>
                        </ul>
                    </div>

                    {/* Message Form */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Gửi một lời nhắn cho tụi mình</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Tên" className="w-full border px-4 py-2" />
                            <input type="email" placeholder="Email" className="w-full border px-4 py-2" />
                            <input type="text" placeholder="Số điện thoại" className="w-full border px-4 py-2" />
                            <textarea placeholder="Bình luận" className="w-full border px-4 py-2 h-24"></textarea>
                            <button type="submit" className="bg-black text-white px-4 py-2">Gửi</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
