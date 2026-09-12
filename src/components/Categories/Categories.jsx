import './Categories.css';
import CategoryItem from "./CategoryItem";
import categories from "../../data/categories";
const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2> 
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <CategoryItem name={category.name} emoji={category.emoji}
             onClick={() => console.log(`Clicked on ${category.name}`)}
            />
          </li>
        ))}
       <li key="All#1223">
            <CategoryItem name="All" emoji="🍽️" 
             onClick={() => console.log("Clicked on All")}
            />
       </li>
      </ul>
    </div>
  );
};

export default Categories;