import React from "react";
import Head from "next/head";
import Link from "next/link";
import Axios from "axios";

export default function Pokedex({ pokemon }) {
  return (
    <div className="container">
      <Head>
        <title>My Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pokedex</h1>
        <p></p>
        {pokemon.map((pokeman, i) => {
          return (
            <p>
              <Link href={`/pokemon/${i + 1}`}>
                <a>
                  {i + 1} - {pokeman.name}
                </a>
              </Link>
            </p>
          );
        })}
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

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

Pokedex.getInitialProps = async () => {
  const pokemon = await Axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=964"
  ).then((response) => response.data.results);
  return { pokemon };
};
