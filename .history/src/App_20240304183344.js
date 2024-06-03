
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./components/Layout/PageLayout/PageLayout";
function App() {
  return (
    <>
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/auth" element={<ProfilePage/>}/>
      </Routes>
    </PageLayout>
    </>
    
  );
}

export default App;
