import { Search, Funnel, BrushCleaning } from "lucide-react";
export default function SearchFilterSection() {
  return (
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
  );
}
