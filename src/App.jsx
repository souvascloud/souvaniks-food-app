import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div className="center">
      <section className="main-section">
        <Header />
        <Outlet/>
        <Footer />
      </section>
    </div>
  );
}

export default App;
