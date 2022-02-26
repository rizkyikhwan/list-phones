import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Search from "../components/Search";
import SkeletonCard from "../components/Skeleton/SkeletonCard";

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (query !== "") {
      const getSearch = async () => {
        try {
          const req = await fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${query}`)
          const res = await req.json()
          setPhones(res.data.phones)
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      }
      getSearch()
    } else {
      const getPhones = async () => {
        try {
          const req = await fetch("https://api-mobilespecs.azharimm.site/v2/latest");
          const res = await req.json();
          setPhones(res.data.phones);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getPhones();
    }

  }, [query]);
  
  let array = []
  for (let index = 0; index < 12; index++) {
    array.push([index])
  }

  return (
    <div className="my-5">
      <h1 className="text-xl font-semibold tracking-wide mb-3">Latest Phone</h1>
      
      <Search searchPhone={(text) => setQuery(text)} />

      {!loading && phones.length === 0 && (
        <div className="flex flex-col justify-center items-center my-28">
          <h1>Phone Not Found...</h1>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-7">
      {loading ? (
        array.map((n) => {
          return <SkeletonCard key={n} />
        })
      ) : (
        <>
          {phones.map((phone) => {
            return (
              <Link to={`/phone/${phone.slug}`} key={phone.slug}>
                <Card phone={phone} />
              </Link>
            )
          })}
        </>
      )}
      </div>
    </div>
  );
};

export default Home;
