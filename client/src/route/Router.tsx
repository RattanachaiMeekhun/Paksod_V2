import React from "react";
import { Route, Routes } from "react-router-dom";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/Home" element={<>Home</>} />
    </Routes>
  );
};

export default Router;
