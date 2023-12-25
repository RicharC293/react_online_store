import Selector from "../selectors/Selector";
import { useState } from "react";

function FilterPrice({ price, setPrice }) {
  //useState
  const [highPriceSelected, setHighPriceSelected] = useState(false);
  const [lowPriceSelected, setLowPriceSelected] = useState(false);

  return (
    <div className="mt-5">
      <h3 className="text-base font-semibold">Precios</h3>
      <div className="filter-price">
        <Selector
          label={"Mas alto"}
          onClick={(e) => {
            setHighPriceSelected(!highPriceSelected);
            setLowPriceSelected(false);
            console.log(e.target.id);
            console.log(!highPriceSelected);
          }}
          checked={highPriceSelected}
          onChange={(e) => {}}
        ></Selector>
        <Selector
          label={"Mas bajo"}
          onClick={(e) => {
            setLowPriceSelected(!lowPriceSelected);
            setHighPriceSelected(false);
            console.log(e.target.id);
            console.log(!lowPriceSelected);
          }}
          checked={lowPriceSelected}
          onChange={(e) => {}}
        ></Selector>
      </div>
    </div>
  );
}

export default FilterPrice;
