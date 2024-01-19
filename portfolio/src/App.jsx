import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/banner";
import Features from "./components/features/features";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div>
        <Navbar className="max-w-screen-xl mx-auto px-16"/>
        <Banner/>
        <Features/>
      </div>
    </div>
  );
}

export default App;
