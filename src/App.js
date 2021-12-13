// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Roadmap />
      <Team />
    </>
  );
}

export default App;
