
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/auth" element={<HomePage/>}/>
    </Routes>
    </>
    
  );
}

export default App;
