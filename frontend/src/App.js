import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1>Langing</h1>
              </>
            }
          ></Route>
          <Route path="/login" element={<h1>Login</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
