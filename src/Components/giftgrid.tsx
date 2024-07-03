import { Sport } from "../DTO/getGifs";
import { GifItem } from "./gifItem";
import { useFetchGifts } from "../hooks/useFetchGifs";

export const GiftGrid = ({ sport }: Sport) => {
  const { images, isLoading } = useFetchGifts({ sport });

  return (
    <>
      <h3>{sport}</h3>
      {isLoading && <h3>is loading...</h3>}
      {images && images.map((image) => <GifItem key={image.id} {...image} />)}
    </>
  );
};
