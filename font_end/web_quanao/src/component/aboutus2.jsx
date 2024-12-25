import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Phần giới thiệu */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Who We Are</h1>
        <p className="text-lg leading-relaxed">
          At [Your Store Name], we bring you the latest in fashion with quality and style. Our mission is to provide trendy and comfortable clothing that suits every occasion.
        </p>
      </section>

      {/* Hình ảnh cửa hàng và đội ngũ */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
          width={'600px'}
          height={'400px'}
            src="https://noithatvanphonghometime.com/wp-content/uploads/2019/06/thiet-ke-shop-thoi-trang-nam-dep-hai-phong-3d2bda60-ccaf-4c5e-ba16-b7d40014043d-547x410.jpeg"
            alt="Our store"
            className="rounded-lg shadow-lg"
          />
          <p className="text-center mt-4 text-lg">Our Fashion Store</p>
        </div>
        <div>
          <img
          width={'600px'}
          height={'400px'}
            src="https://file.hstatic.net/1000253775/article/shop-quan-ao-nam-quan-3_f1a84087e1ca47af9ab54a23017b8ab6.jpg"
            alt="Our team"
            className="rounded-lg shadow-lg"
          />
          <p className="text-center mt-4 text-lg">Our Creative Team</p>
        </div>
      </section>

      {/* Phần giới thiệu sản phẩm */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <p className="text-lg leading-relaxed">
          We curate the latest trends in fashion, providing everything from casual wear to elegant dresses. Our collections are designed with a blend of comfort and style, ensuring you always look your best.
        </p>
      </section>

      {/* Tỷ lệ phát triển */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold">Design</h3>
            <p className="text-3xl text-blue-600 font-bold">50%</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quality</h3>
            <p className="text-3xl text-green-600 font-bold">40%</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Sustainability</h3>
            <p className="text-3xl text-red-600 font-bold">30%</p>
          </div>
        </div>
      </section>

      {/* Logo các thương hiệu đối tác */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
        <div className="flex justify-center space-x-4">
          <img src="https://via.placeholder.com/100x50" alt="Brand 1" />
          <img src="https://via.placeholder.com/100x50" alt="Brand 2" />
          <img src="https://via.placeholder.com/100x50" alt="Brand 3" />
          <img src="https://via.placeholder.com/100x50" alt="Brand 4" />
          <img src="https://via.placeholder.com/100x50" alt="Brand 5" />
        </div>
        <p className="mt-4 text-gray-600">
          We collaborate with top fashion brands to bring you the best clothing collections from around the world.
        </p>
      </section>

      {/* Dream Team */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <p className="text-center text-lg leading-relaxed mb-8">
          Our team consists of talented designers, fashion experts, and support staff who work together to ensure you get the best shopping experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Thành viên 1 */}
          <div className="text-center">
            <img
               width={'150px'}
               height={'150px'}
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/372687435_1652657608580152_2953309329970328416_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=669761&_nc_ohc=tC9tHj3sfHwQ7kNvgF2Z-pZ&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AikzV_DX3eXaA1lBC-D9QRC&oh=00_AYCnZUvGcLABezkktUsZEZ7uWbtc7ExAKjVjW_GEnrzwvA&oe=677020E3"
              alt="Jayvion Simon"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Phan Thanh Vũ</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          {/* Thành viên 2 */}
          <div className="text-center">
            <img
            width={'150px'}
            height={'150px'}
              src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/370008145_2033465697045703_8013359996205786778_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=SetOMji6lGIQ7kNvgG-rbwm&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A9Tk0r0xtEePhoaP-52qOO_&oh=00_AYBUCA127IUdj4WCHWZzIcOFdJwpBBlqbTXMHWU1xpNHtw&oe=67703A5A"
              alt="Lucian Obrien"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Trần Hoàng Minh</h3>
            <p className="text-gray-500">Head of Design</p>
          </div>

          {/* Thành viên 3 */}
          <div className="text-center">
            <img
     width={'150px'}
               height={'150px'}
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/372687435_1652657608580152_2953309329970328416_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=669761&_nc_ohc=tC9tHj3sfHwQ7kNvgF2Z-pZ&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AikzV_DX3eXaA1lBC-D9QRC&oh=00_AYCnZUvGcLABezkktUsZEZ7uWbtc7ExAKjVjW_GEnrzwvA&oe=677020E3"
                          alt="Deja Brady"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Trần Minh Đại</h3>
            <p className="text-gray-500">Marketing Manager</p>
          </div>

          {/* Thành viên 4 */}
          <div className="text-center">
            <img
 width={'150px'}
            height={'150px'}
              src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/370008145_2033465697045703_8013359996205786778_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=SetOMji6lGIQ7kNvgG-rbwm&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A9Tk0r0xtEePhoaP-52qOO_&oh=00_AYBUCA127IUdj4WCHWZzIcOFdJwpBBlqbTXMHWU1xpNHtw&oe=67703A5A"
                          alt="Harrison Stein"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Trần Minh Đại</h3>
            <p className="text-gray-500">Customer Support Lead</p>
          </div>

          {/* Thành viên 5 */}
          <div className="text-center">
            <img
 width={'150px'}
            height={'150px'}
              src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/370008145_2033465697045703_8013359996205786778_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=SetOMji6lGIQ7kNvgG-rbwm&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A9Tk0r0xtEePhoaP-52qOO_&oh=00_AYBUCA127IUdj4WCHWZzIcOFdJwpBBlqbTXMHWU1xpNHtw&oe=67703A5A"
                          alt="Reece Chung"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Trần Minh Đại</h3>
            <p className="text-gray-500">Fashion Expert</p>
          </div>

          {/* Thành viên 6 */}
          <div className="text-center">
            <img
     width={'150px'}
               height={'150px'}
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/372687435_1652657608580152_2953309329970328416_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=669761&_nc_ohc=tC9tHj3sfHwQ7kNvgF2Z-pZ&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=AikzV_DX3eXaA1lBC-D9QRC&oh=00_AYCnZUvGcLABezkktUsZEZ7uWbtc7ExAKjVjW_GEnrzwvA&oe=677020E3"
                          alt="Lainey Davidson"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Trần Minh Đại</h3>
            <p className="text-gray-500">Content Strategist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
