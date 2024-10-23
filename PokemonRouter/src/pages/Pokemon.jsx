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

        setPokemon(prev => {
          if (prev.find(p => p.id === data.id)) {
            return prev
          }
          return [...prev, data]
        })

      } catch (error) {
        console.log(error)
      }
    }
    const maxRequest = 50;
    for (let i = 1; i <= maxRequest; i++) {
      fetchPokemon(i)
    }
  }, [])
  return (
    <div className="flex flex-wrap  m-4 gap-4">
      {pokemon.map((pokemon) => {
        return (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} className="card shadow-lg p-4 bg-pink-100 w-48">
            <div className="card-body">
              <img src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="card-img-toü w-full h-auto mb-2"
              />
              <h2 className="card-title">{pokemon.name}</h2>
            </div>
          </Link>
        )
      })}
    </div>

  )

}