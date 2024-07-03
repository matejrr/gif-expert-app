import { useState } from "react";
import { GiftGrid, AddSport } from "../Components";
import { handleButton } from "../Helpers/handleButton";

type Deportes = string[];

export const GifExpertApp = () => {
  const [sport, setSport] = useState<Deportes>([]);
  const [counter, setCounter] = useState(0);

  const handleButtonOnClick = () => {
    handleButton({ sport, setSport }, { counter, setCounter });
  };
  return (
    <>
      <h1>GIF Finder</h1>
      <h2>Añade un deporte</h2>
      <AddSport sport={sport} setSport={setSport} />
      <button onClick={handleButtonOnClick}>Add sport</button>
      <ol>
        {sport.map((sport) => (
          <div key={sport}>
            <GiftGrid sport={sport} />
          </div>
        ))}
      </ol>
    </>
  );
};
