import FirebaseAuth from "./components/SiginIn";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Signup/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} component={Home} />
          <Route path="/login" element={<FirebaseAuth />} />
          <Route path="/signup" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
