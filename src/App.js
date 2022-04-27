import "./bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { Container } from "react-bootstrap";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import Default from "./pages/Default";
const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <main className="my-3">
          <Container>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/default" element={<Default />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </>
  );
};

export default App;
