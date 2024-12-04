const Description = () => {
  return (
    <div className="mt-8 text-left bg-white shadow-lg rounded-lg p-6">
      {/* Specifications Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
          Specifications
        </h2>
        <div className="mt-4 text-gray-600 space-y-2">
          <p>
            <strong className="font-semibold text-gray-800">Category:</strong>{" "}
            Mobile
          </p>
          <p>
            <strong className="font-semibold text-gray-800">Manufacturer:</strong>{" "}
            Apple
          </p>
          <p>
            <strong className="font-semibold text-gray-800">Warranty:</strong>{" "}
            12 Months
          </p>
          <p>
            <strong className="font-semibold text-gray-800">Serial number:</strong>{" "}
            358607726380311
          </p>
          <p>
            <strong className="font-semibold text-gray-800">Ships from:</strong>{" "}
            United States
          </p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
          Product Details
        </h2>
        <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
          <li>The foam sockliner feels soft and comfortable</li>
          <li>Pull tab</li>
          <li>Not intended for use as Personal Protective Equipment</li>
          <li>Colour Shown: White/Black/Oxygen Purple/Action Grape</li>
          <li>Style: 921826-109</li>
          <li>Country/Region of Origin: China</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
          Benefits
        </h2>
        <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
          <li>
            Mesh and synthetic materials on the upper keep the fluid look of the
            OG while adding comfort and durability.
          </li>
          <li>
            Originally designed for performance running, the full-length Max Air
            unit adds soft, comfortable cushioning underfoot.
          </li>
          <li>The foam midsole feels springy and soft.</li>
          <li>The rubber outsole adds traction and durability.</li>
        </ul>
      </section>

      {/* Delivery and Returns Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
          Delivery and Returns
        </h2>
        <p className="mt-4 text-gray-600">
          Your order of $200 or more gets free standard delivery.
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-2">
          <li>Standard delivery: 4-5 Business Days</li>
          <li>Express delivery: 2-4 Business Days</li>
          <li>
            Orders are processed and delivered Monday-Friday (excluding public
            holidays)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Description;
