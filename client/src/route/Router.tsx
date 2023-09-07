import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeContent from "../content/HomeContent";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
    </Routes>
  );
};

export default Router;
