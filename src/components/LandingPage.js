// src/components/LandingPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CreateConferenceModal from "./CreateConferenceModal";
import ConferenceButton from "./ConferenceButton";

const PageContainer = styled.div`
  padding: 40px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  max-width: 800px;
  margin: 50px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CreateButton = styled.button`
  padding: 10px 20px;
  background-color: #80deea;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 20px;

  &:hover {
    background-color: #4dd0e1;
  }
`;

const LandingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [conferences, setConferences] = useState([]);

  // Load conferences from localStorage on mount
  useEffect(() => {
    const savedConferences = JSON.parse(localStorage.getItem("conferences"));
    if (savedConferences) {
      setConferences(savedConferences);
    }
  }, []);

  // Save conferences to localStorage whenever the conferences state changes
  useEffect(() => {
    localStorage.setItem("conferences", JSON.stringify(conferences));
  }, [conferences]);

  const handleCreate = (conference) => {
    setConferences((prevConferences) => [...prevConferences, conference]);
  };

  return (
    <PageContainer>
      <h1>Welcome to the MUN Conference Manager</h1>
      <CreateButton onClick={() => setModalOpen(true)}>
        Create Conference
      </CreateButton>
      {conferences.map((conf, index) => (
        <ConferenceButton key={index} conference={conf} />
      ))}
      {isModalOpen && (
        <CreateConferenceModal
          onClose={() => setModalOpen(false)}
          onCreate={handleCreate} // Pass the handleCreate function here
        />
      )}
    </PageContainer>
  );
};

export default LandingPage;
