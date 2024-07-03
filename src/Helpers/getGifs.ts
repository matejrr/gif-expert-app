import { Img, ImgData, Sport } from "../DTO/getGifs";

export const getGifs = async (props: Sport) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xdoSN34Uepc4Fc65AbLShZxCZAk26fCI&q=${props.sport}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();
  console.log("data", data);

  const gifs: Img[] = data.map((img: ImgData) => ({
    title: img.title,
    id: img.id,
    url: img.images.downsized.url,
  }));

  return gifs;
};
