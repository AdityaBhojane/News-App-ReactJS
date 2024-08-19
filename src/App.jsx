import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsBanner from "./assets/NewsBanner.jpg";
import SearchResult from "./Page/SearchResult";
import Alert from "./Components/Alert/Alert";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search,setSearch] = useState("india")

  useEffect(() => {
    // ; for to stop above logic if available to prevent I I F E
    (async () => {
        try {
        setLoading(true)
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}`,{
            headers: {
              'X-Api-Key': `${import.meta.env.VITE_NEWS_API_KEY}`,
              'Connection': 'keep-alive' // Ensures HTTP/1.1 is used
            }
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const NewsData = await response.json();
        setNews(NewsData.articles);
        setLoading(false);
      } catch (err) {
        console.log(`${err}`)
        setError(true);
      }
      })();

  }, [search]);

  if(error){
    return <Alert/>
  }
  
  return (
    <>
      <Navbar searchHandler={setSearch}/>
      {loading? <span className="loading loading-dots loading-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
      "></span>:<SearchResult news={news} NewsBanner={NewsBanner}/>}
    </>
  );
}

export default App;
