import { useSelector, useDispatch } from "react-redux";
import { setCategoryFilter } from "./ProductsSlice";

function categoryFilter() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.products.categories)
    const categoryChange = (e) => {
        const selectedCategory = e.target.value
        dispatch(setCategoryFilter(selectedCategory))
    } 

    return (
        <div>
            <label htmlFor="categoryFilter">
                filter by category
            </label>
            <select onChange={categoryChange}>
                <option value="">All</option>
                {categories.map(
                    category => 
                        <option key={category} value={category}>
                            {category}
                        </option>
                                )
                }
            </select>
        </div>
    )
}

export default categoryFilter