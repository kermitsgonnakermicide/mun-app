// src/components/ConferencePage.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  height: 100vh; /* Full page height */
  display: flex;
  flex-direction: column; /* Top-to-bottom layout */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

const SectionTitle = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color: #333;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #80cbc4;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #4db6ac;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1; /* Takes up the remaining space below the header */
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns items to the top */
  align-items: center;
`;

const SidebarItem = styled.button`
  width: 100%;
  padding: 15px;
  margin: 15px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Content = styled.div`
  flex: 1; /* Take up the remaining space */
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  margin: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ConferencePage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Go back to the landing page
  };

  return (
    <PageWrapper>
      <Header>
        <BackButton onClick={handleBack}>Back</BackButton>
        <SectionTitle>Welcome to the {name} Conference</SectionTitle>
      </Header>
      <ContentWrapper>
        <Sidebar>
          <SidebarItem onClick={() => alert("Pre-Conference clicked")}>
            Pre-Conference
          </SidebarItem>
          <SidebarItem onClick={() => alert("Delegate View clicked")}>
            Delegate View
          </SidebarItem>
          <SidebarItem onClick={() => alert("Documents clicked")}>
            Documents
          </SidebarItem>
          <SidebarItem onClick={() => alert("Info Parser clicked")}>
            Info Parser
          </SidebarItem>
        </Sidebar>
        <Content>
          {/* Additional content can go here */}
          <h2>Conference details and content will be displayed here.</h2>
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ConferencePage;
