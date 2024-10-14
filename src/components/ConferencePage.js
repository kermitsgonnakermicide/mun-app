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
  text-align: left;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConferenceName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ConferenceDetails = styled.div`
  font-size: 0.9rem;
  color: #e0e0e0;
`;

const ConferenceButton = ({ conference }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/conference/${conference.name}`);
  };

  return (
    <Button onClick={handleClick}>
      <ConferenceName>{conference.name}</ConferenceName>
      <ConferenceDetails>
        {conference.committee} ({conference.country})
      </ConferenceDetails>
    </Button>
  );
};

export default ConferenceButton;
