
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./components/Layout/PageLayout/PageLayout";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  const [authUser] = useAuthState(auth);
  return (
    <>
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to='/auth'/>}/>
        <Route path="/auth" element={!authUser ? <AuthPage/> : <Navigate to='/'/>}/>
        <Route path="/:username" element={<ProfilePage/>}/>
      </Routes>
    </PageLayout>
    </>
    
  );
}

export default App;
