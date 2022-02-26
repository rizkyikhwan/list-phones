import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DetailPage = () => {
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const getPhone = async () => {
      try {
        const req = await fetch(`https://api-mobilespecs.azharimm.site/v2/${params.slug}`);
        const res = await req.json();
        setPhone(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPhone();
  }, [params]);

  return (
    <main className="my-5">
      <h1 className="text-xl font-semibold tracking-wide mb-3">Phone Detail</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="sm:flex md:space-x-5">
          <aside className="basis-1/4">
            <div className="sticky top-4">
              <Carousel showStatus={false} showIndicators={false}>
                {phone.phone_images.map((image, i) => {
                  return (
                    <img
                      src={image}
                      key={i}
                      alt={phone.phone_name}
                      className="rounded-lg w-full"
                    />
                  );
                })}
              </Carousel>
            </div>
          </aside>
          <div className="basis-3/4">
            <div className="mb-5">
              <h1 className="text-2xl font-bold tracking-wide">
                {phone.phone_name}
              </h1>
              <span className="font-medium text-gray-500">{phone.brand}</span>
              <time className="block text-sm">{phone.release_date}</time>
            </div>
            <h3 className="font-semibold text-lg tracking-wide mb-2">
              Specification
            </h3>
            <div className="space-y-3">
              {phone.specifications.map((specification, i) => {
                return (
                  <div key={i} className="border-2 border-indigo-300 p-3 rounded-lg bg-slate-300 dark:bg-slate-700 space-y-2">
                    <h4 className="font-semibold text-lg tracking-wide border-b-2 border-indigo-300">
                      {specification.title}
                    </h4>
                    {specification.specs.map((spec) => {
                      return (
                        <div key={spec.key}>
                          <h5 className="font-semibold text-indigo-500 dark:text-indigo-400">{spec.key}</h5>
                          {spec.val.map((value, i) => {
                            return <p key={i} className="text-sm leading-relaxed text-justify">{value}</p>;
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DetailPage;
