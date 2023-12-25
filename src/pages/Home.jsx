import FilterShoes from "../components/filter/FilterShoes";
import FilterPrice from "../components/filter/FilterPrice";

function Home({ children }) {
  return (
    <div className="my-4 mx-6 flex gap-10">
      <div className="min-w-32">
        <h2 className="text-xl font-semibold">Filtros</h2>
        <FilterShoes />
        <FilterPrice />
      </div>
      <div className="flex flex-wrap gap-1 place-content-between">
        {children}
      </div>
    </div>
  );
}

export default Home;
