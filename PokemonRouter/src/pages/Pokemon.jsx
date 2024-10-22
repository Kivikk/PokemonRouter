import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    async function fetchPokemon(id) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!res.ok) throw new Error('Request failed')
        const data = await res.json()
        setPokemon(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPokemon()
  })

  return <div>Pokemon</div>
}