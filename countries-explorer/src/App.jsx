import "./App.css";
import { Earth, Search, Funnel, BrushCleaning } from "lucide-react";
import Header from "./components/Header";
import SearchFilterSection from "./components/SearchFilterSection";
import CountriesCardsSection from "./components/CountriesCardsSection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ErrorSection from "./components/ErrorSection";
import LoadingSection from "./components/LoadingSection";
let COUNTRYES_URL =
  "https://restcountries.com/v3.1/all?fields=cca3,name,region,population,flags";
function App() {
  // Define use state
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const trimedSearch = search.trim();
  // Define UseEffect For Fetch Data From API
  const controller = new AbortController();
  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError(null);
        if (trimedSearch.length >= 2) {
          COUNTRYES_URL = `https://restcountries.com/v3.1/name/${encodeURIComponent(trimedSearch)}`;
        }
        const fetchCountriesResult = await fetch(COUNTRYES_URL, {
          signal: controller.signal,
        });

        if (!fetchCountriesResult.ok) {
          throw new Error(`Failed to fetch countries data`);
        }
        const data = await fetchCountriesResult.json();
        setCountries(data);
        console.log(data);
      } catch (err) {
        setError(err.message || "Something went wrong...");
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, [trimedSearch]);

  return (
    <>
      <div className="page">
        {/* Header Section */}
        <Header></Header>
        {/* Search and filter section */}
        {/* Search Section */}
        <SearchFilterSection
          search={search}
          setSearch={setSearch}
        ></SearchFilterSection>
        {/* Loading Section */}
        <LoadingSection loading={loading}></LoadingSection>
        {/* Error Section */}
        <ErrorSection error={error}></ErrorSection>
        {/* Countries Card Section */}
        <CountriesCardsSection countries={countries}></CountriesCardsSection>
        {/* Footer Section */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
