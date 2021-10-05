import "./Pokemon.css";

const Pokemon = (props) => {
  const formatPokemonName = (str, img = false) => {
    if (/(\w+-(m|f)\b)/i.test(str)) {
      switch (img) {
        case false:
          return /-m\b/i.test(str)
            ? str.replace(/-m\b/i, " macho")
            : str.replace(/-f\b/i, " fêmea");
        case true:
          return /-m\b/i.test(str)
            ? str.replace(/-m\b/i, "_m")
            : str.replace(/-f\b/i, "_f");
        default:
          return;
      }
    } else if (/\w+-\w+/.test(str)) {
      switch (img) {
        case false:
          return str.replace(/-/, ". ");
        case true:
          return str.replace(/-/, ".");
        default:
          return;
      }
    } else {
      return str;
    }
  };

  // console.log(props.pokemon.types);
  return (
    <div>
      <div className="pokemon">
        <figure>
          <img
            src={`https://projectpokemon.org/images/normal-sprite/${formatPokemonName(
              props.pokemon.name,
              true
            )}.gif`}
            alt={`${formatPokemonName(props.pokemon.name)}`}
          />
        </figure>
        <div className={`pokemon__type--${props.pokemon.types[0].type.name}`}>
          <footer className="pokemon__info">
            <span>nº {props.pokemon.id}</span>
            <h2>{formatPokemonName(props.pokemon.name)}</h2>
            <ul className="pokemon__type">
              {props.pokemon.types.map((pokemonType) => {
                return (
                  <li
                    className="pokemon__type-item"
                    key={`%${formatPokemonName(props.pokemon.name)}${
                      pokemonType.type.name
                    }`}
                  >
                    <p className={`type--${pokemonType.type.name}`}>
                      {pokemonType.type.name}
                    </p>
                  </li>
                );
              })}
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
