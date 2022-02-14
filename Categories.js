
function Categories ({updateCategories, activeCategory, categories}) {
    return(
        <div>
            <select className = 'lmj-categories'
                value = {activeCategory}
                onChange = {(e) => updateCategories(e.target.value)}
                className = 'lmj-categories-select'
            >
                <option value= ''>Choisissez une catégories</option>
                {categories.map((cat) => (
                    <option key = {cat} value = {cat}>{cat}
                    </option>
                ))}
            </select>
                  <button onClick={() => updateCategories('')}>Toutes les catégories</button> 
        </div>
    )
}

export default Categories;