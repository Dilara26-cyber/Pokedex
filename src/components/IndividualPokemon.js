const IndividualPokemon = ({ pokemonDetails }) => {
  const { abilities } = pokemonDetails;
  return (
    <section>
      <h1>{pokemonDetails.name}</h1>
      <div>
        {abilities &&
          abilities.map((item, index) => {
            return <p key={index}>{item.ability.name}</p>;
          })}
      </div>
      {pokemonDetails.base_experience}
    </section>
  );
};

export default IndividualPokemon;
