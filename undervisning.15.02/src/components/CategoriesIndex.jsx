import { Link } from "react-router-dom"
export default function CategoriesIndex(){
    return(
    <>
        <h1>Categories</h1>
        <ul>
            {categories.map((category, index) => <li key={category+index}><Link to={category}>{category}</Link></li>)}
        </ul>
    </>
    )
}