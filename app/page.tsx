"use client";

import { BannerContext } from "@/context/BannerContext";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { CardContext } from "@/context/CardContext";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState("Heading 2");

  return (
    <main>
      <Banner title={BannerContext.title} context={BannerContext.context} />
      <div className='card-container'>
        {CardContext.map((card) => (
          <Card
            key={card.cardTitle}
            imageUrl={card.imageUrl}
            cardContext={card.cardContext}
            cardTitle={card.cardTitle}
            buttonTitle={card.buttonTitle}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
          />
        ))}
      </div>
    </main>
  );
}
