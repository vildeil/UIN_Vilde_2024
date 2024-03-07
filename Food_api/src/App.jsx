import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
 
  const [food, setFood] = useState("")
  const apiKey = process.env.REACT_APP_API_KEY

  const getFood = async() =>{
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}d&cuisine=italian`)
    .then(response => response.json())
    .then(data => setFood(data.results))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    getFood()
  },[])

  console.log(food)

  return (
    <>
      <h2>Hello</h2>
    </>
  )
}

export default App
