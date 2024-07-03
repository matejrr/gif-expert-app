import { useEffect, useState } from "react";
import { Img, Sport } from "../DTO/getGifs";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifts = ({ sport }: Sport) => {
  const [images, setImage] = useState<Img[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const newImages = await getGifs({ sport });
      if (newImages === undefined) return [];
      else {
        setIsLoading(false);
        return setImage(newImages);
      }
    };
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
