import "./Home.css";

import Pokemon from "../components/Pokemon";

const Home = (props) => {
  return (
    <section>
      {props.pokemonDataArray.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
      ))}
    </section>
  );
};

export default Home;
