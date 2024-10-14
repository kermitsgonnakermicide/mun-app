// src/components/InfoParser.js
import React, { useState } from "react";
import styled from "styled-components";
import Papa from "papaparse"; // Ensure PapaParse is installed
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Container = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content */
`;

const UploadButton = styled.input`
  margin: 10px 0;
`;

const CountryButton = styled.button`
  margin: 10px 0; /* Vertical spacing between buttons */
  padding: 15px 30px; /* Adjusted padding for girth */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  max-width: 300px; /* Limit the button width */
  width: auto; /* Use auto width instead of 100% */

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #80cbc4;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin: 20px 0; /* Margin for spacing */

  &:hover {
    background-color: #4db6ac;
  }
`;

const InfoParser = () => {
  const [countries, setCountries] = useState([]);
  const [isParsed, setIsParsed] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          // Extract country names and serial numbers from the CSV
          const parsedCountries = results.data.map((row) => ({
            serial: row["Serial No"], // Extract Serial No first
            name: row["Country Name"], // Then Country Name
          }));
          setCountries(parsedCountries);
          setIsParsed(true); // Mark as parsed
        },
      });
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container>
      <BackButton onClick={handleBack}>Back to Conference</BackButton>
      {!isParsed && (
        <div>
          <h2>Upload CSV File</h2>
          <UploadButton type="file" accept=".csv" onChange={handleFileChange} />
        </div>
      )}
      {isParsed &&
        countries.map((country, index) => (
          <CountryButton key={index}>
            {country.name} {/* Display the country name */}
          </CountryButton>
        ))}
    </Container>
  );
};

export default InfoParser;
