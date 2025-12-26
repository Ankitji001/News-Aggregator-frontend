import { useEffect, useState } from "react";
import { fetchNews } from "../services/newsApi";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("technology");

  useEffect(() => {
    loadNews();
  }, [category]);

  const loadNews = async () => {
    try {
      setLoading(true);
      const res = await fetchNews({ category });
      setNews(res.data.articles);
    } catch {
      alert("Failed to load news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar setCategory={setCategory} />
      {loading ? (
        <Loader />
      ) : (
        <div className="news-grid">
          {news.map((item, index) => (
            <NewsCard key={index} data={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
