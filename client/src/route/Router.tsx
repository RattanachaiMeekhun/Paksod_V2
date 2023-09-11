import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeContent from "../content/HomePage/HomeContent";
import LoginContent from "../content/LoginPage/LoginContent";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/login" element={<LoginContent />} />
    </Routes>
  );
};

export default Router;
