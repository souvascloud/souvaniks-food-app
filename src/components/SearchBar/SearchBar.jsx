import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search for food or restaurants..."
      />
    </div>
  );
};

export default SearchBar;