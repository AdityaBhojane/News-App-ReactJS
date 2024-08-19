/* eslint-disable react/prop-types */


function SearchResult({news,NewsBanner}) {
  return (
    <>
      <div className="w-[80%] m-auto grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-20 mt-10">
        {news?.map((items, index) => {
          return (
            <div
              key={index}
              className="card card-compact bg-base-100 w-80 shadow-xl overflow-hidden min-h-[100%] h-fit"
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

export default SearchResult;
