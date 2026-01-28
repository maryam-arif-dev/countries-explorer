import { MapPin, Flag, Users } from "lucide-react";
export default function CountriesCardsSection({ countries }) {
  return (
    <div className="countries-cards">
      {countries.map((country) => (
        <div className="country-card-column" key={country}>
          <div className="country-flag">
            <img
              src={country.flags?.png}
              alt={country.flags?.alt || country.name?.common}
              className="country-flag"
            />
          </div>
          <div className="country-name">
            <span className="name-icon">
              <Flag size={24} color="#475569" strokeWidth={2} />
            </span>
            {country.name.common}
          </div>
          <div className="country-region">
            <span className="region-icon">
              <MapPin size={20} color="#3B82F6" strokeWidth={1.75} />
            </span>
            {country.region}
          </div>
          <div className="country-population">
            <span className="population-icon">
              <Users size={20} color="#10B981" strokeWidth={1.75} />
            </span>
            {country.population}
          </div>
        </div>
      ))}
    </div>
  );
}
