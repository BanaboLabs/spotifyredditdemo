/**********************
 * Second Level File *
 **********************/

import React, { useEffect } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/Pages/LoginPage.js";
import Home from "../src/Pages2/HomePage.js";
import awsconfig from "./aws-exports";
import styled from "styled-components";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <ParentWrapper>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ParentWrapper>
  );
}

// Makes it so app doesn't flow off screen
const ParentWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const hiiiii = styled.div``;
