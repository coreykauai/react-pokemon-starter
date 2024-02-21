export default function PokemonDetails({
  name,
  type,
  icon,
  typeIcon,
  description,
}) {
  return (
    <div className="poke-card">
      <h2>{name}</h2>
      <p>Type:{type}</p>
      <img className="chosen-poke-pic" src={icon} alt="" />
      <img className="typecon" src={typeIcon} alt="" />
      <p>Description: {description}</p>
    </div>
  );
}
