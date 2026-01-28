import "./App.css";
import { Earth, Search, Funnel, BrushCleaning } from "lucide-react";
function App() {
  return (
    <>
      <div className="page">
        {/* Header Section */}
        <header className="header">
          <div className="header-title">
            <span className="header-title-icon">
              <Earth size={28} color="#ffffff" strokeWidth={1.75} />
            </span>
            Countries Explorer
          </div>
        </header>
        {/* Search and filter section */}
        {/* Search Section */}
        <div className="search-filter-section">
          <div className="search-column">
            <span className="search-icon">
              <Search size={28} color="#ffffff" strokeWidth={1.75} />
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="Enter Country Name..."
            />
          </div>
          {/* Filter Section */}
          <div className="filter-column">
            <span className="filter-icon">
              <Funnel size={28} color="#ffffff" strokeWidth={1.75} />
            </span>
            <select name="" id="">
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          {/* Claer Filter */}
          <div className="clear-filter-column">
            <button className="clear-filter">
              <BrushCleaning size={28} color="#ffffff" strokeWidth={1.75} />
              Claer Filters
            </button>
          </div>
        </div>
        {/* Countries Card Section */}
        <div className="countries-cards">
          <div className="country-card-column">
            <div className="country-flag"></div>
            <div className="country-name"></div>
            <div className="country-region"></div>
            <div className="country-population"></div>
          </div>
        </div>
        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">@Maryam Arif</div>
        </footer>
      </div>
    </>
  );
}

export default App;
