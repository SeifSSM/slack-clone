import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./componenets/header/Header";
import SideBar from "./componenets/sidebar/SideBar";
import Chat from "./componenets/chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./componenets/login/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://apiway.ai/storage/softs/YisONm9JLhNxkKDlmWkpbKGrotSo13uAuZxZhked.jpg"
            alt="slack"
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
