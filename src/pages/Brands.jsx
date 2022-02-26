import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkeletonBrands from "../components/Skeleton/SkeletonBrands";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhones = async () => {
      try {
        const req = await fetch(
          "https://api-mobilespecs.azharimm.site/v2/brands"
        );
        const res = await req.json();
        setBrands(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPhones();
  }, []);

  let array = []
  for (let index = 0; index < 24; index++) {
    array.push([index])
  }

  return (
    <div className="my-5">
      <h1 className="text-xl font-semibold tracking-wide mb-3">Brands</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          array.map(i => {
            return <SkeletonBrands key={i} />
          })
        ) : (
          <>
            {brands.map((brand) => {
              return (
                <Link key={brand.brand_id} to={`/brand/${brand.brand_slug}`}>
                  <div
                    className="py-4 px-3 border-2 border-gray-500 dark:border-gray-300 rounded-lg shadow-md bg-slate-300 dark:bg-slate-700 hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer transition duration-200"
                  >
                    <h2 className="text-lg">{brand.brand_name}</h2>
                    <p>Phone available: {brand.device_count}</p>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Brands;
