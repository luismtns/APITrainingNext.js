import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function Pokemon({ _pokemon }) {
  return (
    <div className="container">
      <Head>
        <title>My Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{_pokemon.name}</h1>
        <img src={_pokemon.sprites.front_default} style={{ height: 400 }}></img>
        <img src={_pokemon.sprites.front_shiny} style={{ height: 400 }}></img>
        <div>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </div>
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

Pokemon.getInitialProps = async ({ query }) => {
  const number = query.number;
  const _pokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((response) => response.data);
  return { _pokemon };
};
