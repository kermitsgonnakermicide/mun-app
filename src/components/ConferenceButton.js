// src/components/ConferenceButton.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ConfButton = styled.button`
  padding: 20px 40px; /* Increased padding for larger button */
  background-color: #b2dfdb;
  border: none;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
  font-size: 1.2rem; /* Increased font size */

  &:hover {
    background-color: #80cbc4;
  }
`;

const Emoji = styled.span`
  font-size: 2rem; /* Increased emoji size */
  margin-right: 15px; /* Adjusted margin for spacing */
`;

const ConferenceButton = ({ conference }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/conference/${conference.confName}`);
  };

  return (
    <ConfButton onClick={handleClick}>
      <Emoji>{conference.emoji}</Emoji>
      {conference.confName} ({conference.committee})
    </ConfButton>
  );
};

export default ConferenceButton;
