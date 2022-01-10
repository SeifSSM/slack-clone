import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./componenets/header/Header";
import SideBar from "./componenets/sidebar/SideBar";
import Chat from "./componenets/chat/Chat";
function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <SideBar />
        <Routes>
          <Route path="/" element={<Chat/>} />
        </Routes>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
