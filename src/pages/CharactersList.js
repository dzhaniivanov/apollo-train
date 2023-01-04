import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  if (error) return <div>something went wrong</div>;

  if (loading) return <div>spinner....</div>;
  return (
    <div className="list">
      {data.characters.results.map((character) => {
        return (
          <Link to={`${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
