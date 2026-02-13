import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./component/Profile";
import LogIn from "./component/LogIn";
import Body from "./component/Body";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>} >
          <Route path="/login" element={<LogIn/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
