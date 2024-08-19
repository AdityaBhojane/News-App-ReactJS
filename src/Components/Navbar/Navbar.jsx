/* eslint-disable react/prop-types */
function Navbar({searchHandler}) {
  return (
    <>
      <div className="navbar bg-base-100 relative z-10">
        <div className="w-[80%] m-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a
            onClick={()=>searchHandler("Cricket")}
             className="btn btn-ghost text-2xl">News Feed</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-5 font-bold">
              <li>
                <a
                onClick={()=>searchHandler("Sports India")}
                >Sports</a>
              </li>
              <li>
                <a
                 onClick={()=>searchHandler("Marvel and DC movies")}
                >Movies</a>
              </li>
              <li>
                <details>
                  <summary>Country</summary>
                  <ul className="p-2">
                    <li>
                      <a 
                      onClick={()=>searchHandler("india")}
                      >India</a>
                    </li>
                    <li>
                      <a
                      onClick={()=>searchHandler("USA")}
                      >USA</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="ml-[20%]">
            <a
            onClick={()=>searchHandler("Latest News")}
            className="btn btn-primary">Latest News</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
