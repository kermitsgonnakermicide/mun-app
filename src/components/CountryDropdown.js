// src/components/CountryDropdown.js

import React, { useState } from "react";
import countries from "../utils/countries";

const CountryDropdown = ({ selectedCountry, setSelectedCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="dropdown-search"
      />
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="dropdown-select"
      >
        <option value="" disabled>
          Select a country
        </option>
        {filteredCountries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}{" "}
            {String.fromCodePoint(
              `0x1F1${country.code.charCodeAt(0) - 65}${
                country.code.charCodeAt(1) - 65
              }`
            )}{" "}
            {/* Flag emoji */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
