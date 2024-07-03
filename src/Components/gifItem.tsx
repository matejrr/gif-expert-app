import { Img } from "../DTO/getGifs";

export const GifItem: React.FC<Img> = ({ title, url }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
