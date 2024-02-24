import Checkbox from "../selectors/checkbox/Checkbox";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { search } from "../../services/search";

var typesFilter = [];

function FilterShoes() {
  const { setProducts } = useContext(ProductsContext);

  const handleFilter = async (e) => {
    console.log(e.target.value);
    console.log(typesFilter);
    if (e.target.checked) {
      typesFilter.push(e.target.value);
    } else {
      typesFilter = typesFilter.filter((type) => type !== e.target.value);
    }

    console.log(typesFilter);
    
    const location = window.location.pathname;
    const fetchedProducts = await search('', location);

    if (typesFilter.length === 0) return setProducts(fetchedProducts);

    const newProducts = fetchedProducts.filter((product) =>
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
