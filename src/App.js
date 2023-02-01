import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import LearningTools from "./Components/LearningTools";
import Contributor from "./Components/Contributor";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <LearningTools/>
      <Contributor/>
      <Footer/>
    </div>
  );
}

export default App;
