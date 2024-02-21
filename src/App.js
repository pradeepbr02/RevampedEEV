import Wrapper from "./Components/Wrapper";
import "./App.css";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Submit from "./Components/Submit";
function App() {
  const [form, setForm] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Wrapper>
                {Array.from({ length: 6 }, (_, i) => (
                  <Card form={form} setForm={setForm} key={i}/>
                ))}
              </Wrapper>
            </>
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </>
  );
}

export default App;
