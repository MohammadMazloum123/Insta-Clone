
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./components/Layout/PageLayout/PageLayout";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import useAuthStore from "./store/authStore";
function App() {
  const authUser = useAuthStore(state => state.user);
  return (
    <>
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to='/auth'/>}/>
        <Route path="/auth" element={!authUser ? <AuthPage/> : }/>
        <Route path="/:username" element={<ProfilePage/>}/>
      </Routes>
    </PageLayout>
    </>
    
  );
}

export default App;
