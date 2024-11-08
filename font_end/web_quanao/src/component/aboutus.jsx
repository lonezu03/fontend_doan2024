import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Phần giới thiệu */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Who we are?</h1>
        <p className="text-lg leading-relaxed">
          Let's work together and make awesome sites easily.
        </p>
      </section>

      {/* Hình ảnh văn phòng */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Our office small"
            className="rounded-lg shadow-lg"
          />
          <p className="text-center mt-4 text-lg">Our office small</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Our office large"
            className="rounded-lg shadow-lg"
          />
          <p className="text-center mt-4 text-lg">Our office large</p>
        </div>
      </section>

      {/* Phần giới thiệu sản phẩm */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">What is Minimal?</h2>
        <p className="text-lg leading-relaxed">
          Our theme is the most advanced and user-friendly theme you will find on the market. We have
          documentation and video to help set your site really easily. Pre-installed demos you can
          import in one click, and everything from the theme options to page content can be edited
          from the front-end. This is the theme you are looking for.
        </p>
      </section>

      {/* Tỷ lệ phát triển */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold">Development</h3>
            <p className="text-3xl text-blue-600 font-bold">20%</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Design</h3>
            <p className="text-3xl text-green-600 font-bold">40%</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Marketing</h3>
            <p className="text-3xl text-red-600 font-bold">60%</p>
          </div>
        </div>
      </section>

      {/* Logo các đối tác */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
        <div className="flex justify-center space-x-4">
          <img src="https://via.placeholder.com/100x50" alt="IBM" />
          <img src="https://via.placeholder.com/100x50" alt="Spotify" />
          <img src="https://via.placeholder.com/100x50" alt="Netflix" />
          <img src="https://via.placeholder.com/100x50" alt="HBO" />
          <img src="https://via.placeholder.com/100x50" alt="Amazon" />
        </div>
        <p className="mt-4 text-gray-600">
          Our vision is to offer the best products that help businesses grow.
        </p>
      </section>

      {/* Dream Team */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Dream Team</h2>
        <p className="text-center text-lg leading-relaxed mb-8">
          Great team is the key. Minimal will provide you support if you have any problems. Our support team
          will reply within a day, and we also have detailed documentation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Thành viên 1 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Jayvion Simon"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Phan Thanh Vũ</h3>
            <p className="text-gray-500">tư vấn viên</p>
          </div>

          {/* Thành viên 2 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Lucian Obrien"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Trần Hoàng Minh</h3>
            <p className="text-gray-500">tư vấn viên</p>
          </div>

          {/* Thành viên 3 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Deja Brady"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Trần Minh Đại</h3>
            <p className="text-gray-500">"Pha Chế"</p>
          </div>

          {/* Thành viên 4 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Harrison Stein"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Harrison Stein</h3>
            <p className="text-gray-500">Team Leader</p>
          </div>

          {/* Thành viên 5 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Reece Chung"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Reece Chung</h3>
            <p className="text-gray-500">Software Developer</p>
          </div>

          {/* Thành viên 6 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Lainey Davidson"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Lainey Davidson</h3>
            <p className="text-gray-500">Marketing Strategist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
