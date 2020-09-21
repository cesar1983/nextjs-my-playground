import React, { useState } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles.js'

const Poke = ({ poke }) => {
  const [pokes, setPokes] = useState([])

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/')
  }

  const getAllPoke = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon')
    let pokes = response.json()
    setPokes(pokes)
  }

  const pokeHtml = (
    <div>
      <S.Title>Poke Info</S.Title>
      <dl>
        <dd>Name</dd>
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
      {pokes &&
        pokes.length &&
        pokes.results.lenght &&
        pokes.results.map((poke) => {
          return <div key={poke.name}>{poke.name}</div>
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
