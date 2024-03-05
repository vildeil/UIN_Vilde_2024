import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Episode({name}) {
    const [result, setResult] = useState(null)

    const getEpisode = async(episode) => {
        fetch(name)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.log(error))
    }

    console.log(result)

    useEffect(()=> {
        getEpisode()
    },[])

    return (
        <h3><Link to={result?.name}>{result?.name}</Link></h3>
    )
}