import "@/css/banner.css";
import React from "react";
import Button from "./Button";

type HeaderProps = {
  context: string;
  title: string;
};
const Banner = ({ context, title }: HeaderProps) => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <h2 className='banner-title'>{title}</h2>
        <p className='banner-para'>{context}</p>
        <Button title='Contact Us' />
      </div>
    </div>
  );
};

export default Banner;
