import Image from "next/image";
import React from "react";

type CardImageProps = {
  imageUrl: string;
};
const CardImage = ({ imageUrl }: CardImageProps) => {
  return (
    <div>
      <Image src={imageUrl} alt='card-image' />
    </div>
  );
};

export default CardImage;
