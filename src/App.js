import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom";
import "./index.css";
import TopNav from "./components/TopNav.jsx";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Resume from "./pages/Resume.jsx"
import Footer from "./components/Footer.jsx"
import NotFound from "./pages/NotFound.jsx"


function App() {
  return (
    <div className="app">
      <Router>
        <TopNav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/resume' element={<Resume />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
