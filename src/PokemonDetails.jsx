export default function PokemonDetails({ name, type, icon, description }) {
  return (
    <div className="poke-card">
      <h2>{name}</h2>
      <p>Type:{type}</p>
      <img className="chosen-poke-pic" src={icon} alt="" />
      <p>Description: {description}</p>
    </div>
  );
}
