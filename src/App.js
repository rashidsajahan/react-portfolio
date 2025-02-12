import About from "./containers/About";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Navbar from "./containers/Navbar";
import Skills from "./containers/Skills";
import Work from "./containers/Work";

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
