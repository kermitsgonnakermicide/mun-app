// src/components/CreateConferenceModal.js
import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4db6ac;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #00897b;
  }
`;

const CreateConferenceModal = ({ onClose, onCreate }) => {
  const [confName, setConfName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("🇺🇸 USA");
  const [selectedCommittee, setSelectedCommittee] = useState("UNHCR"); // Default to UNHCR

  const countries = [
    "🇺🇸 USA",
    "🇨🇳 China",
    "🇫🇷 France",
    "🇷🇺 Russia",
    "🇬🇧 UK",
    "🇮🇳 India",
    // Add more countries here...
  ];

  const committees = {
    UNHCR: "United Nations Human Rights Council",
    UNSC: "United Nations Security Council",
    UNCSW: "United Nations Commission on the Status of Women",
    WTO: "World Trade Organisation",
    WHO: "World Health Organisation",
    UNODC: "United Nations Office on Drugs and Crimes",
  };

  const handleCreate = () => {
    onCreate({
      confName,
      emoji: selectedCountry.split(" ")[0],
      committee: selectedCommittee, // Pass selected committee
    });
    onClose();
  };

  return (
    <ModalContainer>
      <h2>Create Conference</h2>
      <input
        type="text"
        placeholder="Enter conference name"
        value={confName}
        onChange={(e) => setConfName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />
      <Select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </Select>
      <Select
        value={selectedCommittee}
        onChange={(e) => setSelectedCommittee(e.target.value)}
      >
        {Object.keys(committees).map((abbreviation, index) => (
          <option key={index} value={abbreviation}>
            {committees[abbreviation]}
          </option>
        ))}
      </Select>
      <Button onClick={handleCreate}>Create</Button>
      <Button onClick={onClose}>Cancel</Button>
    </ModalContainer>
  );
};

export default CreateConferenceModal;
