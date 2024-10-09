import React, { useState } from "react";
import styled from "styled-components";
import countries from "./data/countries"; // Adjust the path as necessary

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
`;

const Title = styled.h2`
  margin: 0 0 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateConferenceModal = ({ onClose, onCreate }) => {
  const [conferenceName, setConferenceName] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const committees = [
    "United Nations Human Rights Council (UNHCR)",
    "United Nations Security Council (UNSC)",
    "United Nations Commission on the Status of Women (UNCSW)",
    "World Trade Organisation (WTO)",
    "World Health Organisation (WHO)",
    "United Nations Office on Drugs and Crimes (UNODC)",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new conference object
    const newConference = {
      name: conferenceName,
      committee: selectedCommittee,
      country: selectedCountry,
    };

    // Call the onCreate function to update the conferences state in LandingPage
    onCreate(newConference);

    // Close the modal after submission
    onClose();
  };

  return (
    <ModalContainer>
      <Title>Create Conference</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="conferenceName">Conference Name</Label>
          <Input
            type="text"
            id="conferenceName"
            value={conferenceName}
            onChange={(e) => setConferenceName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="committee">Select Committee</Label>
          <Select
            id="committee"
            value={selectedCommittee}
            onChange={(e) => setSelectedCommittee(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a committee
            </option>
            {committees.map((committee, index) => (
              <option key={index} value={committee}>
                {committee}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="country">Select Country</Label>
          <Select
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <Button type="submit">Create Conference</Button>
      </form>
      <Button onClick={onClose}>Close</Button>
    </ModalContainer>
  );
};

export default CreateConferenceModal;
