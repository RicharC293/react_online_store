import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="w-full text-center inline-block align-middle">
      <h1 className="text-4xl font-bold mt-48">NIKE 440</h1>
      <p className="text-2xl mt-5">Las mejores zapatillas</p>
      <Link to={"/men"}>
        <button className="rounded-md border-2 bg-black mt-5">
          <p className="text-lg font-semibold text-white p-2">COMPRAR AHORA</p>
        </button>
      </Link>
    </div>
  );
}

export default Landing;
