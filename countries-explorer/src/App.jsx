import "./App.css";
import { Earth, Search, Funnel, BrushCleaning } from "lucide-react";
import Header from "./components/Header";
import SearchFilterSection from "./components/SearchFilterSection";
import CountriesCardsSection from "./components/CountriesCardsSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="page">
        {/* Header Section */}
        <Header></Header>
        {/* Search and filter section */}
        {/* Search Section */}
        <SearchFilterSection></SearchFilterSection>
        {/* Countries Card Section */}
        <CountriesCardsSection></CountriesCardsSection>
        {/* Footer Section */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
