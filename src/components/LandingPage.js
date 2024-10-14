import React, { useState } from "react";
import styled from "styled-components";
import CreateConferenceModal from "./CreateConferenceModal";
import ConferenceButton from "./ConferenceButton"; // Ensure you import the ConferenceButton

const LandingContainer = styled.div`
  background-color: #e0f7fa;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 50px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const AddConferenceButton = styled.button`
  background-color: #81c784;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #66bb6a;
  }
`;

const LandingPage = ({ conferences, onCreateConference }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <LandingContainer>
      <h1>Welcome to the MUN Conference Management</h1>

      {/* Show dynamically created conferences */}
      {conferences.length > 0 ? (
        conferences.map((conference, index) => (
          <ConferenceButton key={index} conference={conference} /> // Use ConferenceButton to display conference
        ))
      ) : (
        <p>No conferences created yet.</p>
      )}

      <AddConferenceButton onClick={() => setShowModal(true)}>
        Add Conference
      </AddConferenceButton>

      {/* Modal for creating new conference */}
      {showModal && (
        <CreateConferenceModal
          onCreateConference={(newConference) => {
            onCreateConference(newConference);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)} // Close modal correctly
        />
      )}
    </LandingContainer>
  );
};

export default LandingPage;
