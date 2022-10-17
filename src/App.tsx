import "./App.css";

import { ToastContainer } from "react-toastify";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PNF from "./components/PNF";
import BizCardz from "./components/BizCardz";
import NewCard from "./components/NewCard";
import MyBizCardz from "./components/MyBizCardz";
import EditCard from "./components/EditCard";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <main>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/bizCardz" element={<BizCardz />}></Route>
            <Route path="/newCard" element={<NewCard />}></Route>
            <Route path="/myCardz" element={<MyBizCardz />}></Route>
            <Route path="/edit/:id" element={<EditCard />}></Route>
            <Route path="*" element={<PNF />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
