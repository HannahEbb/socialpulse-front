import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import FacebookSignIn from "./pages/FacebookSignIn";
import Post from "./pages/Post";


function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/fb-sign-in" element={<FacebookSignIn/>}/>
              <Route path="/post" element={<Post/>}/>
          </Routes>
      </Router>
    </>
);
}

export default App;
