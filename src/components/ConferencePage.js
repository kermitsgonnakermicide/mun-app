// src/components/ConferencePage.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  max-width: 800px;
  margin: 50px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #80cbc4;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #4db6ac;
  }
`;

const ConferencePage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Go back to the landing page
  };

  return (
    <PageContainer>
      <BackButton onClick={handleBack}>Back</BackButton>
      <h1>Welcome to the {name} Conference</h1>
    </PageContainer>
  );
};

export default ConferencePage;
