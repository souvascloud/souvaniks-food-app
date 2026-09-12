import "./Categories.css";

const CategoryItem = ({ name, emoji, onClick }) => {
  return (
    <div className="category-item" onClick={onClick}>
      <span>{emoji}</span>
      <span>{name}</span>
    </div>
  );
};

export default CategoryItem;