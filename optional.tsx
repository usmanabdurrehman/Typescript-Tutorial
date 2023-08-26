import React, { useState } from "react";

type Card = { id: number; content: string };

interface CardProps {
  card: Card;
  onClick: () => void;
}

const Card = ({ card, onClick }: CardProps) => {
  return null;
};

const Home = () => {
  const [card, setCard] = useState<Card>();

  return <Card card={card} onClick={() => {}} />;
};
