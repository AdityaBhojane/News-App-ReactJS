import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsBanner from "./assets/NewsBanner.jpg";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ; for to stop above logic if available to prevent I I F E
    try {
      (async () => {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-07-19&sortBy=publishedAt&apiKey=a4ead3c6b96a42f2a7ef9de328cdebb6"
        );
        const NewsData = await response.json();
        setNews(NewsData.articles);
        setLoading(false);
      })();
    } catch (error) {
      setError("Something is wrong" + error);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-[80%] m-auto grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-20 mt-10">
        {news?.map((items, index) => {
          return (
            <div
              key={index}
              className="card card-compact bg-base-100 w-80 shadow-xl overflow-hidden min -h-[100%] h-fit"
            >
              <figure className="w-full min-h-[60%] h-48">
                <img
                  className="w-full h-full object-cover"
                  src={items.urlToImage ? items.urlToImage : NewsBanner}
                  alt="News_image"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{items.title}</h2>
                <p>{items.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      window.location.href = items.url;
                    }}
                    className="btn btn-primary cursor-pointer"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
