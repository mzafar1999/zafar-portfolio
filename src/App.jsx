import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext, ThemeProvider } from "./context/theme";
import { useContext } from "react";
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
       {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;
