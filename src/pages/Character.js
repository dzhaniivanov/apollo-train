import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <div>something went wrong</div>;

  if (loading) return <div>spinner....</div>;

  return (
    <div className="character">
      <img src={data.character.image} width={750} height={750} />

      <div className="character_content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character_episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
