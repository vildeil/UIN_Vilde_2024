import { useParams } from "react-router-dom"
import { posts } from "../assets/posts"
import { useEffect, useState } from "react"

export default function PostPage(){
    const {slug, postid} = useParams()
    const [currentCatergory, setCurrentCategory] = useState()

    useEffect (()=>{
        setCurrentCategory(posts?.filter(post=> post.category === slug))
    },[])

    console.log(currentCatergory?.filter(item => JSON.stringify(item.id) === postid))
    return(
        <h1>Post Page</h1>
    )
}