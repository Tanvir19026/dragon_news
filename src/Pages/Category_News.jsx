import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import News from "../Components/News";
import Pagination from "../Components/Pagination";

const Category_News = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [category_news, setCategory_news] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    let filterData = [];

    if (id == 0) {
      filterData = data;
    } else if (id == 1) {
      filterData = data.filter((news) => news.others.is_today_pick === true);
    } else {
      filterData = data.filter((news) => news.category_id == id);
    }

    setCategory_news(filterData);
    setPage(1); // reset to first page when category changes
  }, [data, id]);

  const totalPages = Math.ceil(category_news.length / perPage);
  const start = (page - 1) * perPage;
  const currentNews = category_news.slice(start, start + perPage);

  return (
    <div>
      {category_news.length > 0 ? (
        <p className="font-bold">Total news: {category_news.length}</p>
      ) : (
        <p className="font-bold">No news found</p>
      )}

      {currentNews.map((news) => (
        <News key={news.id} news={news} />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default Category_News;
