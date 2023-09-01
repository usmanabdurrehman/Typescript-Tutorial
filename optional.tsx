import React, { useState } from "react";

type Card = { id: number; content: string };

interface CardProps {
  card: Card | undefined;
  onClick: () => void;
}

const Card = ({ card, onClick }: CardProps) => {
  if (!card) return null;

  return (
    <div>
      <h1>{card.content}</h1>
    </div>
  );
};

const Home = () => {
  const [card, setCard] = useState<Card>();

  return <Card card={card} onClick={() => {}} />;
};
