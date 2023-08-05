import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import { Home } from "./Components/Home";
import { MainLayout } from "./Components/MainLayout";
import { ShowsDetails } from "./Pages/ShowsDetails";
import { Starred } from "./Pages/Starred";

function reducer(currentState, action) {
  switch (action.type) {
    case "unStar":
      return currentState.filter((item) => item !== action.id);
    case "star":
      return currentState.concat(action.id);

    default:
      return currentState;
  }
}

function App() {
  const [star, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("star")) || []
  );

  localStorage.setItem("star", JSON.stringify(star));
  function handleStar(id) {
    const isStar = star.includes(id);

    if (isStar) {
      dispatch({ type: "unStar", id });
    } else {
      dispatch({ type: "star", id });
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/box-office" element={<MainLayout />}>
            <Route
              index
              element={<Home star={star} handleStar={handleStar} />}
            />
            <Route
              path="/box-office/starred"
              element={<Starred star={star} handleStar={handleStar} />}
            />
          </Route>
          <Route path="/box-office/show/:id" element={<ShowsDetails />} />
          <Route path="*" element={<h1>Page Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
