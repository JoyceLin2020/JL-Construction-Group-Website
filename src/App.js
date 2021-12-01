import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import OurProjects from "./pages/ProjectsPage";
import ContactUs from "./pages/ContactUsPage";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/our-projects" component={OurProjects} />
        <Route exact path="/contact-us" component={ContactUs} />
      </main>
    </div>
  );
}

export default App;
