import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Heading from '../../components/Heading'

const Poke = ({ poke }) => {
  const [pokes, setPokes] = useState([])

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
  }

  const getAllPoke = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon')
    let data = await response.json()
    let allPokes = data.results
    console.log(allPokes)
    setPokes(allPokes)
  }

  const pokeHtml = (
    <div>
      <Heading>Poke Info</Heading>
      <dl>
        <dd>Name Poke</dd>
        <dd>{poke?.name}</dd>
        <dd>Weight</dd>
        <dd>{poke?.weight}</dd>
      </dl>
      <h2>abilities</h2>
      {poke.abilities.map((key) => {
        return (
          <div key={key.ability.name}>
            {key.ability.name} - {key.ability.url}
          </div>
        )
      })}
      <br />
      <br />
      <p>
        <button onClick={getAllPoke}>Carregar todos</button>
      </p>
      {pokes.map((pk) => {
        return <div key={pk.name}>{pk.name}</div>
      })}

      <br />
      <button onClick={handleClick}>Voltar</button>
    </div>
  )

  return poke ? pokeHtml : '<>loading...</>'
}

export const getStaticProps = async () => {
  async function fetchPokeData() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    return response.json()
  }
  const poke = await fetchPokeData()

  return {
    props: {
      poke
    }
  }
}

export default Poke
