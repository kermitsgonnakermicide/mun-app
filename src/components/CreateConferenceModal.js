// src/components/CreateConferenceModal.js
import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const CreateConferenceModal = ({ onCreateConference, onClose }) => {
  // Change onCreate to onCreateConference
  const [name, setName] = useState("");
  const [committee, setCommittee] = useState("UNHCR");
  const [country, setCountry] = useState("United Nations");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newConference = { name, committee, country };
    onCreateConference(newConference); // Pass the new conference to the parent
    setName(""); // Reset fields
    setCommittee("UNHCR");
    setCountry("United Nations");
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Create New Conference</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Conference Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Select
            value={committee}
            onChange={(e) => setCommittee(e.target.value)}
          >
            <option value="UNHCR">UNHCR</option>
            <option value="UNICEF">UNICEF</option>
            <option value="UNEP">UNEP</option>
            <option value="UNSC">UNSC</option>
            <option value="CCC">CCC</option>
            <option value="UNGA">UNGA</option>
          </Select>
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            {/* Replace with a complete list of countries */}
            <option value="United Nations">🇺🇳 United Nations</option>
            <option value="USA">🇺🇸 United States</option>
            <option value="UK">🇬🇧 United Kingdom</option>
            <option value="Canada">🇨🇦 Canada</option>
          </Select>
          <button type="submit">Create Conference</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default CreateConferenceModal;
