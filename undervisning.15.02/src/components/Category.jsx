import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import Episode from "./Episode"

export default function Category({currentId}){
    const [post, setPost] = useState()

    const getCharacter = async() => {
        fetch(`https://rickandmortyapi.com/api/character/${currentId}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error(error))
    }

    useEffect(()=>{
        getCharacter()
    },[])

    console.log("sjekk", currentId)
    return (
    <section>
        <h1>{post?.name}</h1>
        <img src={post?.image} alt={post?.name}></img>
        <ul>
            {post?.episode?.map((item, i) => <li key={i}><Episode name={item} /></li>)}
        </ul>
        {/*post?.map(item => <PostCard key={item.id} title={item.title} category={item.category} id={item.id} ingress={item.ingress}/>)*/}
    </section>
    
    )
}