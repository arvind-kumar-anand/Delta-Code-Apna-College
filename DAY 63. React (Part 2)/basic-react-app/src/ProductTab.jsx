import Products from "./Products.jsx";

function ProductTab() {
  return (
    <div>
      <Products title="mobile" price={20000} />
      <Products title="laptop" price={40000} />
      <Products title="charger" price={20} />
    </div>
  );
}

export default ProductTab;