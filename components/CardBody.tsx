import React from "react";

interface CardBodyProps {
  context: string;
}
const CardBody = ({ context }: CardBodyProps) => {
  return <div>{context}</div>;
};

export default CardBody;
