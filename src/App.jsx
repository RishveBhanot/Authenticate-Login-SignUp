import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./components/Main";
import { Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/main' element={<Main/>}/>

        </Routes>
      </BrowserRouter>
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <Main/> */}
    </div>
  );
};
export default App;
