
const Description = () => {
  return (
    <div className="mt-8 text-left"> {/* Thêm class text-left để căn lề trái */}
      <h2 className="text-2xl font-bold">Specifications</h2>
      <div className="mt-4">
        <p><strong>Category:</strong> Mobile</p>
        <p><strong>Manufacturer:</strong> Apple</p>
        <p><strong>Warranty:</strong> 12 Months</p>
        <p><strong>Serial number:</strong> 358607726380311</p>
        <p><strong>Ships from:</strong> United States</p>
      </div>

      <h2 className="text-2xl font-bold mt-8">Product details</h2>
      <ul className="list-disc ml-6 mt-4">
        <li>The foam sockliner feels soft and comfortable</li>
        <li>Pull tab</li>
        <li>Not intended for use as Personal Protective Equipment</li>
        <li>Colour Shown: White/Black/Oxygen Purple/Action Grape</li>
        <li>Style: 921826-109</li>
        <li>Country/Region of Origin: China</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Benefits</h2>
      <ul className="list-disc ml-6 mt-4">
        <li>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort and durability.</li>
        <li>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushioning underfoot.</li>
        <li>The foam midsole feels springy and soft.</li>
        <li>The rubber outsole adds traction and durability.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Delivery and returns</h2>
      <p className="mt-4">Your order of $200 or more gets free standard delivery.</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Standard delivery: 4-5 Business Days</li>
        <li>Express delivery: 2-4 Business Days</li>
        <li>Orders are processed and delivered Monday-Friday (excluding public holidays)</li>
      </ul>
    </div>
  );
};

export default Description;
