
// const SearchPopup = ({isSearchOpen,setIsSearchOpen}) => {
//     const handleSubmit = e => {
//       e.preventDefault();
//     }
//     return (
//        <div
//   className={`edu-search-popup ${isSearchOpen ? "open" : ""}`}
//   style={{
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "100vh",
//     zIndex: 999999,
//     background: "rgba(0,0,0,0.45)",
//     backdropFilter: "blur(4px)",
//     display: isSearchOpen ? "flex" : "none",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >


//             <div className="content-wrap">
                
//                 <div className="close-button" onClick={() => setIsSearchOpen(false)}>
//                     <button className="close-trigger"><i className="icon-73"></i></button>
//                 </div>
//                 <div className="inner">
//                     <form className="search-form" onSubmit={handleSubmit}>
//                         <input type="text" className="edublink-search-popup-field" placeholder="Search Here..." />
//                         <button className="submit-button"><i className="icon-2"></i></button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SearchPopup;

"use client";

import React, { useState } from "react";

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevent reload

    if (!query.trim()) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div
      className={`edu-search-popup ${isSearchOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(4px)",
        display: isSearchOpen ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="content-wrap">
        {/* ❌ Close */}
        <div
          className="close-button"
          onClick={() => {
            setIsSearchOpen(false);
            setQuery("");
            setResults([]);
          }}
        >
          <button className="close-trigger" type="button">
            <i className="icon-73"></i>
          </button>
        </div>

        <div className="inner">
          {/* 🔍 Search Form */}
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="edublink-search-popup-field"
              placeholder="Search Here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="submit-button" type="submit">
              <i className="icon-2"></i>
            </button>
          </form>

          {/* ✅ RESULTS (UI kept minimal to match template) */}
          {query && (
            <ul className="search-results" style={{ marginTop: 20 }}>
              {results.map((item, index) => (
                <li key={index} style={{ padding: "10px 0" }}>
                  <a href={item.url}>
                    <strong>{item.title}</strong>
                    <span style={{ marginLeft: 8, opacity: 0.7 }}>
                      ({item.type})
                    </span>
                  </a>
                </li>
              ))}

              {results.length === 0 && (
                <li style={{ opacity: 0.6 }}>No results found</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
