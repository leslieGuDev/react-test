import React from "react";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";
import "@/css/card.css";

interface CardProps {
  imageUrl: StaticImageData;
  cardTitle: string;
  cardContext: string;
  buttonTitle: string;
  setIsClicked: (title: string) => void;
  isClicked: string;
}

const Card = ({
  imageUrl,
  cardTitle,
  cardContext,
  buttonTitle,
  setIsClicked,
  isClicked,
}: CardProps) => {
  const handleClick = (cardTitle: string) => {
    setIsClicked(cardTitle);
  };

  return (
    <div
      className={`card ${isClicked === cardTitle ? "clicked" : ""}`}
      onClick={() => handleClick(cardTitle)}
    >
      <Image src={imageUrl} alt='card-image' className='card-image' />
      <div className='card-content'>
        <h2 className='card-header'>{cardTitle}</h2>
        <p className='card-body'>{cardContext}</p>
        <Button title={buttonTitle} />
      </div>
    </div>
  );
};

export default Card;
