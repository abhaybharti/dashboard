import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
