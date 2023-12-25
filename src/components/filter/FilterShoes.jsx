import Checkbox from "../selectors/checkbox/Checkbox";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { CurrentProductsContext } from "../../context/CurrentProductsContext";
var typesFilter = [];

function FilterShoes() {
  const { setProducts } = useContext(ProductsContext);
  const { currentProducts } = useContext(CurrentProductsContext);

  const handleFilter = (e) => {
    console.log(e.target.value);
    console.log(typesFilter);
    if (e.target.checked) {
      typesFilter.push(e.target.value);
    } else {
      typesFilter = typesFilter.filter((type) => type !== e.target.value);
    }

    console.log(typesFilter);

    if (typesFilter.length === 0) return setProducts(currentProducts);

    const newProducts = currentProducts.filter((product) =>
      typesFilter.includes(product.type)
    );
    setProducts(newProducts);
  };

  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold">Tipo de zapatos</h3>
      <Checkbox
        label={"Zapatos"}
        value={"shoes"}
        onChange={handleFilter}
      ></Checkbox>
      <Checkbox
        label={"Zapatillas"}
        value={"snikers"}
        onChange={handleFilter}
      ></Checkbox>
      <Checkbox
        label={"Botas"}
        value={"boots"}
        onChange={handleFilter}
      ></Checkbox>
    </div>
  );
}

export default FilterShoes;
