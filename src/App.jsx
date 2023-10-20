import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";

function App() {
   return (
      <div className="App">
         <nav>
            <Link to="/">Home </Link>
            <hr />
            <Link to="/about">About</Link>
            <hr />
         </nav>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </div>
   );
}

export default App;
