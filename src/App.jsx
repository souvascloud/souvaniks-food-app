import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import PopularRestaurants from "./components/Resturants/PopularRestaurants";


function App() {
  return (
    <div className="center">
      <section className="main-section">
        <Header />
        <SearchBar />
        <Categories />
        <PopularRestaurants />
        <Footer />
      </section>
    </div>
  );
}

export default App;
