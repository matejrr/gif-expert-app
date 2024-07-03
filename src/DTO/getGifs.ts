export interface Sport {
  sport: string;
}

export interface ImgData {
  title: string;
  id: string;
  images: {
    downsized: {
      url: string;
    };
  };
}

export interface Img {
  title: string;
  id: string;
  url: string;
}

export const deportes = [
  "natación",
  "senderismo",
  "equitación",
  "atletismo",
  "remo",
  "bádminton",
  "baloncesto",
  "boxeo",
  "anotaje",
  "ciclismo",
  "ecuestre",
  "esgrima",
  "futbol",
  "gimnasia",
  "halterofilia",
  "balonmano",
  "hockey",
  "judo",
  "pentatlón",
  "moderno",
  "taekwondo",
  "tenis",
  "tiro",
  "tiro con arco",
  "triatlón",
  "voleibol",
];

export type Deportes = string[];

export interface AddSportProps {
  sport: string[];
  setSport: React.Dispatch<React.SetStateAction<Deportes>>;
}

export interface AddCounterProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
