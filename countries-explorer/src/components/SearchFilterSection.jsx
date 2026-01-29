import { X, Search, Funnel, BrushCleaning } from "lucide-react";
export default function SearchFilterSection({
  search,
  setSearch,
  region,
  setRegion,
}) {
  const hasText = search.length > 0;
  return (
    <div className="search-filter-section">
      <div className="search-column">
        <span className="search-icon">
          <Search size={28} color="#ffffff" strokeWidth={1.75} />
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Search Country Name(eg; Afghanistan, USA, UK...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {hasText ? (
          <button
            className="input-clear-btn"
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            title="Clear"
          >
            <X size={28} color="#ffffff" strokeWidth={1.75} />
          </button>
        ) : null}
      </div>
      {/* Filter Section */}
      <div className="filter-column">
        <span className="filter-icon">
          <Funnel size={28} color="#ffffff" strokeWidth={1.75} />
        </span>
        <select
          name=""
          id=""
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="all" className="select-options">
            All
          </option>
          <option value="Africa" className="select-options">
            Africa
          </option>
          <option value="Americas" className="select-options">
            Americas
          </option>
          <option value="Asia" className="select-options">
            Asia
          </option>
          <option value="Europe" className="select-options">
            Europe
          </option>
          <option value="Oceania" className="select-options">
            Oceania
          </option>
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
