import "./App.css";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/theme";
import { useContext } from "react";
import SocialMedia from "./components/SocialMedia";
import GraphicDesignPortfolioScreen from "./Screen/GraphicDesignPortfolioScreen";
function App() {
  const context = useContext(ThemeContext);
  const [{theme}] = context;
  return (
      <Router>
      <div className="App" style={{backgroundColor:theme.backgroundColor,color:theme.color,
        transition: 'all 0.5s ease-out'
      }} >
        <Navbar>
        </Navbar>
      
       <Routes>
       <Route path='/' element={<HomeScreen/>} />
       </Routes>
       <Routes>
       <Route path='/graphic-designing-portfolio' element={<GraphicDesignPortfolioScreen/>} />
       </Routes>

       <SocialMedia/>
      </div>
    </Router>
  );
}

export default App;
