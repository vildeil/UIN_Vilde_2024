import React, {useState} from "react"
import { Link, useParams } from "react-router-dom"

export default function Nav({}) {
    const {id} = useParams()
    
    const [active, setActive] = useState()
    const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters" ]
    
    return(
        <nav>
          <ul>
          {categoryList.map((item, index) => <li key={index}><Link to={"produkter/"+item.replaceAll(" ", "-")} className={active === item ? "active" : null}>{item}</Link></li>)}
          </ul>
      </nav>
    )
}