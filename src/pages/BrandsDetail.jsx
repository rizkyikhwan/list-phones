import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
import Card from "../components/Card";
import ReactPaginate from "react-paginate";

const BrandsDetail = () => {
  const params = useParams();
  const [brandsDetail, setBrandsDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getBrandDetail = async () => {
      try {
        const req = await fetch(
          `http://api-mobilespecs.azharimm.site/v2/brands/${params.slug}?page=${page}`
        );
        const res = await req.json();
        setBrandsDetail(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };  
    getBrandDetail();
  }, [params, page]);

  const handlePageClick = (data) => {
    setPage(data.selected + 1)

    document.documentElement.scrollTo(0, 0)
  }

  let array = [];
  for (let index = 0; index < 12; index++) {
    array.push([index]);
  }

  return (
    <div className="my-5">
      <h1 className="text-xl font-semibold tracking-wide mb-3">{brandsDetail.title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-7">
        {loading ? (
          array.map((n) => {
            return <SkeletonCard key={n} />;
          })
        ) : (
          <>
            {brandsDetail.phones.map((phone) => {
              return (
                <Link to={`/phone/${phone.slug}`} key={phone.slug}>
                  <Card phone={phone} />
                </Link>
              );
            })}
          </>
        )}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={brandsDetail.last_page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"flex items-center justify-center space-x-4 my-5"}
        pageClassName={"py-1 px-2 rounded shadow-md bg-slate-300 dark:bg-slate-700"}
        pageLinkClassName={"page-link"}
        previousClassName={"py-1 px-2 rounded shadow-md bg-slate-300 dark:bg-slate-600 dark:text-indigo-300"}
        previousLinkClassName={"page-link"}
        nextClassName={"py-1 px-2 rounded shadow-md bg-slate-300 dark:bg-slate-600 dark:text-indigo-300"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"text-indigo-700 bg-indigo-300 dark:text-blue-500 dark:bg-slate-900"}
      />
    </div>
  );
};

export default BrandsDetail;
