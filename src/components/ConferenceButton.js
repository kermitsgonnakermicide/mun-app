// src/components/ConferenceButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConferenceButton = ({ conference }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/conference/${conference.name}`); // Navigate to the conference page
  };

  return (
    <Button onClick={handleClick}>
      {conference.name} - {conference.committee} ({conference.country})
    </Button>
  );
};

export default ConferenceButton;
