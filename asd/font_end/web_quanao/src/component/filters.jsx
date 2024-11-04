import  { useState } from 'react';

const Filter = () => {
  // State lưu các lựa chọn lọc
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    category: [],
    color: [],
    price: { min: 0, max: 200 },
    rating: 0,
  });

  // Hàm xử lý khi chọn các option lọc
  const handleSelect = (type, value) => {
    setSelectedFilters((prev) => {
      let newValue;
      if (type === 'price') {
        newValue = { ...prev.price, ...value };
      } else if (prev[type].includes(value)) {
        newValue = prev[type].filter((item) => item !== value);
      } else {
        newValue = [...prev[type], value];
      }
      return { ...prev, [type]: newValue };
    });
  };

  // Hàm để bật/tắt bộ lọc
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Hàm xóa filter
  const removeFilter = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));
  };

  return (
    <div className="relative">
      {/* Button để bật/tắt bộ lọc */}
      <button
        onClick={toggleFilter}
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Filter
      </button>

      {/* Hiển thị bộ lọc */}
      {showFilter && (
        <div className="absolute top-0 right-0 w-64 p-6 bg-white shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button onClick={toggleFilter}>✕</button>
          </div>

          {/* Filter theo Gender */}
          <div className="mb-4">
            <h3 className="font-bold">Gender</h3>
            {['Men', 'Women', 'Kids'].map((gender) => (
              <div key={gender}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={() => handleSelect('gender', gender)}
                    checked={selectedFilters.gender.includes(gender)}
                  />
                  <span className="ml-2">{gender}</span>
                </label>
              </div>
            ))}
          </div>

          {/* Filter theo Category */}
          <div className="mb-4">
            <h3 className="font-bold">Category</h3>
            {['All', 'Shose', 'Apparel', 'Accessories'].map((category) => (
              <div key={category}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={() => handleSelect('category', category)}
                    checked={selectedFilters.category.includes(category)}
                  />
                  <span className="ml-2">{category}</span>
                </label>
              </div>
            ))}
          </div>

          {/* Filter theo Color */}
          <div className="mb-4">
            <h3 className="font-bold">Color</h3>
            {['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Black', 'White'].map(
              (color) => (
                <div key={color}>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      onChange={() => handleSelect('color', color)}
                      checked={selectedFilters.color.includes(color)}
                    />
                    <span className="ml-2">{color}</span>
                  </label>
                </div>
              )
            )}
          </div>

          {/* Filter theo Price */}
          <div className="mb-4">
            <h3 className="font-bold">Price</h3>
            <input
              type="range"
              min="0"
              max="200"
              value={selectedFilters.price.min}
              onChange={(e) =>
                handleSelect('price', { min: parseInt(e.target.value) })
              }
            />
            <span className="ml-2">Min: ${selectedFilters.price.min}</span>
            <input
              type="range"
              min="0"
              max="200"
              value={selectedFilters.price.max}
              onChange={(e) =>
                handleSelect('price', { max: parseInt(e.target.value) })
              }
            />
            <span className="ml-2">Max: ${selectedFilters.price.max}</span>
          </div>

          {/* Filter theo Rating */}
          <div className="mb-4">
            <h3 className="font-bold">Rating</h3>
            {[1, 2, 3, 4].map((star) => (
              <div key={star}>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    className="form-radio"
                    onChange={() => handleSelect('rating', star)}
                    checked={selectedFilters.rating === star}
                  />
                  <span className="ml-2">{star} & Up</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Thẻ tag hiển thị các lựa chọn lọc */}
      <div className="mt-4">
        {Object.entries(selectedFilters).map(([filterType, values]) =>
          Array.isArray(values) ? (
            values.map((value) => (
              <span
                key={value}
                className="inline-block px-3 py-1 m-1 text-sm text-white bg-blue-500 rounded-full cursor-pointer"
                onClick={() => removeFilter(filterType, value)}
              >
                {value} ✕
              </span>
            ))
          ) : null
        )}
      </div>
    </div>
  );
};

export default Filter;
