import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/banner";
import Features from "./components/features/features";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div>
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}

export default App;
