import Navbar from "./Components/Navbar/navbar";
import LandingPage from "./Components/LandingPage/landing_page";
import About from "./Components/About/about";
import Projects from "./Components/Projects/projects";
import Clients from "./Components/Clients/clients";
import ContactMe from "./Components/ContactMe/contactMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="home">
          <LandingPage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="clients">
          <Clients />
        </section>
        <section id="portfolio">
          <Projects />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}

export default App;
