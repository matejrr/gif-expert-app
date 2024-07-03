import React, { useState } from "react";
import { AddSportProps, deportes } from "../DTO/getGifs";

export const AddSport: React.FC<AddSportProps> = ({ sport, setSport }) => {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSport = deportes.find((deporte) => deporte === inputValue);

    if (newSport && !sport.includes(newSport)) {
      setError("");
      return setSport([...sport, newSport]);
    } else if (newSport && sport.includes(newSport)) {
      return setError("El deporte indicado ya existe");
    } else {
      return setError("no se pudo encontrar el deporte indicado");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={handleInputValue}
      ></input>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
