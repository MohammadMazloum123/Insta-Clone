import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePag/>}/>
    </Routes>
    </>
    
  );
}

export default App;
