import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Poke = ({ poke }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const pokeHtml = (
    <div>
      <h1>Poke Info</h1>
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
        );
      })}
      <br />
      <button onClick={handleClick}>Voltar</button>
    </div>
  );

  return poke ? pokeHtml : "<>loading...</>";
};

export const getStaticProps = async (ctx) => {
  async function fetchPokeData() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    return response.json();
  }
  const poke = await fetchPokeData();

  return {
    props: {
      poke,
    },
  };
};

export default Poke;
