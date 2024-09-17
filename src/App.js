import Navbar from "./Components/Navbar/navbar";
import LandingPage from "./Components/LandingPage/landing_page";
import About from "./Components/About/about";
import Projects from "./Components/Projects/projects";
import Clients from "./Components/Clients/clients";
import ContactMe from "./Components/ContactMe/contactMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <LandingPage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="portfolio">
        <Projects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
